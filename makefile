GOLANG_IMAGE ?= anurzhanuly/project-sau:latest

backend:
	docker stop backend_sau && docker rm backend_sau || echo "Первый запуск бэкенда"
	docker pull $(GOLANG_IMAGE)
	docker run --name=backend_sau -d \
		-p 8080:8080 \
		$(GOLANG_IMAGE)