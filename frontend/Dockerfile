# Build stage
FROM node:alpine as build

WORKDIR /usr/src/app

# Copy the frontend code
COPY . .

# Install dependencies and build the project
RUN npm install && npm run build

# Production stage (not needed for serving, but useful if you want multi-stage builds)
# Just copy the build output to the /srv/frontend folder in Caddy using Docker Compose
