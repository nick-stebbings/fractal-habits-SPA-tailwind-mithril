FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN apk add --update nodejs-current nodejs-npm
RUN npm install --legacy-peer-deps
COPY ../.. .
CMD ["NODE_ENV=production", "npm", "run", "build"]
CMD ["node", "server.js"]
