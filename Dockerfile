FROM node:22-bookworm AS base
WORKDIR /app
ENV USER="node"
ENV GROUP="$USER"
ENV HOME="/home/$USER"
ENV DEBIAN_FRONTEND="noninteractive"

RUN ["apt", "update"]
RUN --mount=type=cache,target=/store/apt ["apt", "dist-upgrade", "-y"]
RUN --mount=type=cache,target=/store/apt ["apt", "install", "-y", "curl", "unzip"]

FROM base AS bun
USER $USER
ENV BUN_INSTALL="$HOME/.bun"

# Sharp is a NextJS dependency that relies on node-gyp, which Bun alone cannot
# yet utilise, so we share Node from the chosen base image and manually install
# Bun here for later use
RUN curl -fsSL https://bun.sh/install | bash

COPY bun.lockb package.json ./

ENV PATH="$PATH:$HOME/.bun/bin"

FROM bun AS dependencies
USER root
ENV HUSKY=0
WORKDIR /app/node_modules
WORKDIR /app

COPY .husky/ ./.husky/

RUN --mount=type=cache,target=/store/bun ["bun", "install"]

FROM bun AS build
USER root
ARG NODE_ENV="production"
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN ["bun", "--bun", "run", "build", "--no-lint"]

FROM bun AS cleanup
USER root

RUN ["apt", "autoremove", "-y"]
RUN ["apt", "clean", "-y"]
RUN ["bun", "pm", "cache", "rm"]

FROM cleanup AS release
ARG NODE_ENV
USER $USER
WORKDIR /app

COPY --from=build --chown=$USER:$GROUP /app/.next/standalone ./
COPY --from=build --chown=$USER:$GROUP /app/.next/static ./.next/static
COPY --from=dependencies --chown=$USER:$GROUP /app/node_modules ./node_modules/

CMD ["bun", ".next/standalone/server.js"]

