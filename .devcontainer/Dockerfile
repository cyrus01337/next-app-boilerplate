FROM node:22-bookworm AS base
ENV DEBIAN_FRONTEND=noninteractive

RUN ["apt-get", "update"]
RUN ["apt-get", "dist-upgrade", "-y"]
RUN ["apt-get", "install", "-y", "curl", "git", "unzip", "zsh"]

FROM base AS shell
USER node

RUN sh -c "$(curl -fsSL https://install.ohmyz.sh)" && \
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git /home/node/.oh-my-zsh/custom/themes/powerlevel10k
COPY .zshrc .p10k.zsh $HOME

FROM shell AS cleanup

RUN ["apt", "autoremove", "-y"]
RUN ["apt", "clean", "-y"]
RUN ["bun", "pm", "cache", "rm"]

FROM cleanup AS bun
USER node
WORKDIR /workspace

RUN curl -fsSL https://bun.sh/install | bash
