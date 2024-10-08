FROM debian:bookworm-slim AS system
ENV DEBIAN_FRONTEND="noninteractive"
ENV USER="next"
ENV GROUP="$USER"
ENV HOME="/home/$USER"
WORKDIR /workspace

RUN ["apt-get", "update"]
RUN ["apt-get", "dist-upgrade", "-y"]
RUN ["apt-get", "install", "-y", "black", "curl", "fd-find", "gcc", "git", "isort", "lua5.1", "luarocks", "make", "python3.11-venv", "python3-pip", "ripgrep", "sudo", "unzip", "zsh"]
RUN ["apt-get", "install", "-y", "iproute2", "jq"]

RUN ["update-alternatives", "--install", "/usr/bin/python", "python", "/usr/bin/python3", "20"]
RUN addgroup $GROUP \
    && useradd -mg $USER -G sudo -s /usr/bin/zsh $USER \
    && echo "%sudo ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers;
RUN addgroup docker \
    && usermod -aG docker $USER;

FROM system AS bun
USER $USER
ENV BUN_INSTALL="$HOME/.bun"

RUN curl -fsSL https://bun.sh/install | bash;

FROM system AS cargo
USER $USER

RUN curl -fsLS https://sh.rustup.rs | sh -s -- -y \
    && . $HOME/.cargo/env \
    && rustup default stable;

FROM system AS dive
USER root

COPY ./install-dive.sh .

RUN ["./install-dive.sh"]
RUN ["rm", "./install-dive.sh"]

FROM system AS github-cli
USER root

COPY ./install-github-cli.sh .

RUN ["./install-github-cli.sh"]
RUN ["rm", "./install-github-cli.sh"]

FROM system AS go
USER $USER
WORKDIR /go

RUN curl -fsLS https://go.dev/dl/go1.23.1.linux-amd64.tar.gz -o go.tar.gz \
    && tar xfz go.tar.gz \
    && rm go.tar.gz;

FROM system AS node
USER $USER

RUN curl -fsLS https://fnm.vercel.app/install | bash -s -- --skip-shell --install-dir "$HOME/.local/share/fnm";

ENV PATH="$HOME/.local/share/fnm:$PATH"

RUN eval "$(fnm env --shell bash)" \
    && fnm install 22 \
    && fnm use 22 \
    && npm install -g npm prettier;

FROM system AS python
USER $USER

RUN python -m pip install -U pip;

FROM system AS stylua
USER root
WORKDIR /usr/bin

RUN curl -fsLS https://github.com/JohnnyMorganz/StyLua/releases/download/v0.20.0/stylua-linux-x86_64.zip -o stylua.zip \
    && unzip stylua.zip \
    && rm stylua.zip;

FROM system AS neovim
USER root
WORKDIR /neovim

RUN curl -fsLS https://github.com/neovim/neovim/releases/download/v0.10.1/nvim-linux64.tar.gz -o neovim.zip \
    && tar xfz neovim.zip --strip-components=1 \
    && rm neovim.zip;

FROM system AS final

COPY --from=bun $HOME/.bun/ $HOME/.bun/
COPY --from=cargo --chown=$USER:$GROUP $HOME/.cargo/ $HOME/.cargo/
COPY --from=cargo --chown=$USER:$GROUP $HOME/.rustup/ $HOME/.rustup/
COPY --from=dive /usr/bin/dive /usr/bin/dive
COPY --from=dive /var/lib/dpkg/info/dive.* /var/lib/dpkg/info/
COPY --from=github-cli /etc/apt/keyrings/githubcli-archive-keyring.gpg /etc/apt/keyrings/
COPY --from=github-cli /etc/apt/sources.list.d/github-cli.list /etc/apt/sources.list.d/
COPY --from=github-cli /usr/bin/gh /usr/bin/gh
COPY --from=github-cli /usr/share/zsh/site-functions/_gh /usr/share/zsh/site-functions/_gh
COPY --from=github-cli /var/lib/dpkg/info/gh.* /var/lib/dpkg/info/
COPY --from=go /go/ /usr/local/
COPY --from=node --chown=$USER:$GROUP $HOME/.local/share/fnm/ $HOME/.local/share/fnm/
COPY --from=stylua /usr/bin/stylua /usr/bin/stylua
COPY --from=neovim /neovim/ /usr/

RUN ["apt-get", "clean"]
RUN ["apt-get", "autoremove", "-y"]

