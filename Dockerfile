FROM node:22-bookworm AS base
ENV DEBIAN_FRONTEND="noninteractive"
WORKDIR /app

RUN ["apt", "update"]
RUN --mount=type=cache,target=/store/apt ["apt", "dist-upgrade", "-y"]
RUN --mount=type=cache,target=/store/apt ["apt", "install", "-y", "curl", "unzip"]

FROM base AS bun
ENV BUN_INSTALL="/root/.bun"

# Sharp is a NextJS dependency that relies on node-gyp, which Bun alone cannot
# yet utilise, so we share Node from the chosen base image and manually install
# Bun here for later use
RUN curl -fsSL https://bun.sh/install | bash

COPY bun.lockb package.json ./

ENV PATH="$PATH:/root/.bun/bin"

FROM bun AS dependencies
ENV HUSKY=0
WORKDIR /app/node_modules
WORKDIR /app

COPY .husky ./.husky

RUN --mount=type=cache,target=/store/bun ["bun", "install", "--frozen-lockfile"]

FROM bun AS builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN ["bun", "run", "build", "--no-lint"]

FROM oven/bun:distroless
ENV NODE_ENV="production"
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD ["server.js"]

