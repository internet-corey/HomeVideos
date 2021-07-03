FROM node:14-alpine

WORKDIR /HomeVideos/src

COPY . /HomeVideos/

RUN apk update && apk add vim
RUN cd /HomeVideos/src && npm install
