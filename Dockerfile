FROM node:14-alpine

WORKDIR /HomeVideos

COPY . /HomeVideos/

RUN apk update && apk add vim
RUN apk add mysql-client
RUN npm install
