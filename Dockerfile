FROM golang:alpine as go-app

WORKDIR /code
COPY . .

ENV GO111MODULE=on
ENV GOFLAGS=-mod=vendor

RUN go mod vendor
RUN go get
RUN go build -o project-sau .


FROM alpine
WORKDIR /code

copy --from=go-app /code .

CMD ["./project-sau"]
