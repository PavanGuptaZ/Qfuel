# base image
FROM node:lts-alpine as build-stage

# set working directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# base image
FROM nginx:stable-alpine

# set working directory to nginx assets
WORKDIR /usr/share/nginx/html

# copy artifact build from the 'build-stage' docker image
COPY --from=build-stage /app/dist/ .

# copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose port
EXPOSE 80

# start app
CMD ["nginx", "-g", "daemon off;"]