#!/bin/bash
# Simple script to start an HTTP server for local preview.
# Usage: ./serve.sh [port]
# Defaults to port 8000 if not provided.

PORT=${1:-8000}

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required but was not found."
  exit 1
fi

echo "Starting HTTP server at http://localhost:$PORT"
PORT="$PORT" python3 dev_server.py
