#!/usr/bin/env bash
sudo apt-get update
echo

bun install
bun pm trust --all || true

if [ ! -d .husky/_ ]; then
    bun run prepare
fi
