#!/usr/bin/env bash
# https://github.com/wagoodman/dive?tab=readme-ov-file#installation
DIVE_VERSION=$(curl -sL "https://api.github.com/repos/wagoodman/dive/releases/latest" | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')

curl -L "https://github.com/wagoodman/dive/releases/download/v${DIVE_VERSION}/dive_${DIVE_VERSION}_linux_amd64.deb" -o /tmp/dive.deb
apt install -y /tmp/dive.deb

