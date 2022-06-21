#!/bin/sh
set -e

echo "======== Installing dependencies ========"
npm i
npm i -g hardhat-shorthand

echo "======== Run hardhat local node ========"
hh node
