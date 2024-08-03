FROM node:22-bookworm AS base
ENV DEBIAN_FRONTEND=noninteractive

RUN ["apt-get", "update"]
RUN ["apt-get", "dist-upgrade", "-y"]
RUN ["apt-get", "install", "-y", "curl", "git", "sudo", "unzip", "zsh"]

RUN echo "node ALL=NOPASSWD: ALL" >> /etc/sudoers.d/50-node
RUN echo "Defaults    env_keep += 'DEBIAN_FRONTEND'" >> /etc/sudoers.d/env_keep

RUN ["groupadd", "docker"]
RUN ["usermod", "-aG", "docker", "node"]

FROM base AS shell
USER node

RUN sh -c "$(curl -fsSL https://install.ohmyz.sh)" && \
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git /home/node/.oh-my-zsh/custom/themes/powerlevel10k
COPY .zshrc .p10k.zsh /home/node/

FROM shell AS bun
USER node
WORKDIR /workspace

RUN curl -fsSL https://bun.sh/install | bash
