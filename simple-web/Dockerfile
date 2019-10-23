# Specify base image, here We are using alpine version of Node image
FROM node:alpine

# The copy will be done to this path
WORKDIR /usr/app

# Copy cofig files to container, here it's copying everything from current working directory
# simple-web to current working directory inside the container
COPY ./package.json ./ 

# Install some dependencies[Specifically, installing dependency for node.js Apps]
RUN npm install

COPY ./ ./ 
# Default command. Will get executed when the container is first created.
CMD ["npm","start"]
