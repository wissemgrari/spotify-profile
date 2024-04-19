# Stage 1: Build the Angular application
FROM node:20-alpine as build

WORKDIR /client

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine3.19-slim

WORKDIR /client

COPY --from=build /client/dist/spotify-profile/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
