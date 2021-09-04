FROM golang:1.13 AS builder

ADD config /go/src/apis-temp/config
ADD constants /go/src/apis-temp/constants
ADD database /go/src/apis-temp/database
ADD handler /go/src/apis-temp/handler
ADD helper /go/src/apis-temp/helper
ADD mailer /go/src/apis-temp/mailer
ADD middleware /go/src/apis-temp/middleware
ADD model /go/src/apis-temp/model
ADD notification /go/src/apis-temp/notification
ADD repository /go/src/apis-temp/repository
ADD ui /go/src/apis-temp/ui
ADD util /go/src/apis-temp/util
ADD app.go /go/src/apis-temp/
ADD go.mod /go/src/apis-temp/
ADD go.sum /go/src/apis-temp/

WORKDIR /go/src/apis-temp
ARG GO111MODULE=on
ARG GOOS=linux
ARG GOARCH=amd64
RUN go build -o app *.go

FROM ubuntu:20.04
WORKDIR /apis/

COPY --from=builder /go/src/apis-temp/app /apis/
COPY --from=builder /go/src/apis-temp/go.mod /apis/
COPY --from=builder /go/src/apis-temp/go.sum /apis/

EXPOSE 8000
WORKDIR /apis/
ENTRYPOINT /apis/app
