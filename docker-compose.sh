#!/bin/sh

(
  # Copy our config to Docker Volume for Home Assistant
  mkdir -p ./volumes/home-assistant
  cp \
    ./home-assistant/configuration.yaml \
    ./volumes/home-assistant

  export PUID=$(id -u)
  export PGID=$(id -g)
  # export DOCKER_HOST_IP=$(
  #   docker network inspect bridge | jq -r '.[0].IPAM.Config[0].Gateway'
  # )

  docker compose $1
)
