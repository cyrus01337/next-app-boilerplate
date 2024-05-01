FROM node:22-bookworm-slim AS base
WORKDIR /workspace
ARG DEBIAN_FRONTEND=noninteractive

RUN ["apt", "update"]
RUN ["apt", "upgrade", "-y"]
RUN --mount=type=cache,target=/store/apt ["apt", "install", "-y", "curl", "unzip"]

FROM base AS bun
# Sharp is a NextJS dependency that relies on node-gyp, which Bun alone cannot
# yet utilise, so we share Node from the chosen base image and manually install
# Bun here for later use
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="$PATH:/root/.bun/bin"

FROM bun AS dependencies
COPY package.json .
RUN --mount=type=cache,target=/store/bun ["bun", "install"]

FROM dependencies AS build
COPY . .

ENV NODE_ENV=production
RUN ["bun", "--bun", "run", "build", "--no-lint"]

FROM build AS cleanup
RUN ["apt", "autoremove", "-y"]
RUN ["apt", "clean", "-y"]
RUN ["bun", "pm", "cache", "rm"]

FROM cleanup AS release
CMD ["bun", ".next/standalone/server.js"]
