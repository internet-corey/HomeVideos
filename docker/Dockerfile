FROM node:14-alpine

WORKDIR /HomeVideos

COPY . /HomeVideos/

RUN apk update && apk add vim
RUN cd /HomeVideos/ && npm install && npm install @types/node --save-dev
