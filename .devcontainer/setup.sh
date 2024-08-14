#!/usr/bin/env bash
set -e

bun install
bun pm trust --all || true

if [ ! -d .husky/_ ]; then
    bun run prepare
fi
