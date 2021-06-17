FROM node:14-alpine

WORKDIR /HomeVideos

COPY . /HomeVideos/

RUN apk update && apk add vim
RUN npm init -y
RUN npm install
RUN npm install mysql2
