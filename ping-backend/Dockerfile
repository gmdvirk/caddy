FROM node:alpine

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port used by the ping backend
EXPOSE 3002

CMD ["node", "index.js"]
