#!/bin/bash
docker_dev_up () {
    docker compose -f docker-compose.develop.yml up --build
}

docker_dev_down () {
    docker compose -f docker-compose.develop.yml down
}

docker_build_up () {
    docker compose up --build
}

docker_build_down () {
    docker compose down
}