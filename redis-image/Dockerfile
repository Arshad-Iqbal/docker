# Use an existing Docker image as base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Download and install another dependency
RUN apk add --update gcc

# Tell the image what to do when it starts as a dependency
CMD ["redis-server"]
