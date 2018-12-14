FROM node:11-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
