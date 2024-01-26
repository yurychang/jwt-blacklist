#!/bin/bash

# Function to stop the server and web processes
stop_processes() {
  echo "Stopping processes..."

  docker compose down # Stop the Docker containers
  exit 0
}

# Set up a trap to catch signals and run the stop_processes function
trap 'stop_processes' SIGINT SIGTERM

docker compose up -d

cd server
pnpm dev

# Wait for the processes to finish (or until the trap is triggered)
wait