#!/usr/bin/env bash
set -e

export BUN_INSTALL="/home/next/.bun"
export PATH="$PATH:$BUN_INSTALL/bin"

bun install
bun pm trust --all || true

if [ ! -d .husky/_ ]; then
    bun run prepare
fi
