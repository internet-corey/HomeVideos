FROM node:14-alpine

WORKDIR /HomeVideos/src

COPY . /HomeVideos/

RUN apk update && apk add vim
RUN npm init -y
RUN npm i
RUN npm i mysql2
RUN npm i typescript --save-dev
