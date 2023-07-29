docker-dev-up:
	docker compose -f docker-compose.develop.yml up --build

docker-dev-down:
	docker compose -f docker-compose.develop.yml down

docker-build-up:
	docker compose up --build

docker-build-down:
	docker compose down