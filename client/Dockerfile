FROM node:20-alpine as build

WORKDIR /client

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

