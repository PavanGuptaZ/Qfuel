# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy project files
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "run", "start"]