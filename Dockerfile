FROM golang:alpine as go-app

WORKDIR /code
COPY . .

ENV GO111MODULE=on
ENV CONFIG_PATH="config/production/production.toml"

RUN go get
RUN go build -o project-sau ./cmd/server/main.go


FROM alpine
WORKDIR /code

copy --from=go-app /code .

CMD ["./project-sau"]
