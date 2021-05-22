FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN sudo apt-get install npm -g -y
RUN npm install
COPY ../.. ./
CMD ["NODE_ENV=production", "npm", "run", "build"]
CMD ["node", "server.js"]
