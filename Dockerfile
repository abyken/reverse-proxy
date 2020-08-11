FROM nginx:1.19.1-alpine

RUN apk add nginx-module-njs

EXPOSE 80