FROM node:22-bookworm-slim AS base
WORKDIR /workspace
ARG DEBIAN_FRONTEND=noninteractive

RUN ["apt", "update"]
RUN ["apt", "upgrade", "-y"]
RUN --mount=type=cache,target=/store/apt ["apt", "install", "-y", "curl", "unzip"]

FROM base AS bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="$PATH:/root/.bun/bin"
