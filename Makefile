buildx:
	docker buildx build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/journal-431505/dev/oracle-relayer:latest .

run:
	docker run -d asia-southeast1-docker.pkg.dev/journal-431505/dev/oracle-relayer:latest

deploy:
	docker buildx build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/journal-431505/dev/oracle-relayer:latest . --push
