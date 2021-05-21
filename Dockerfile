FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN NODE_ENV=production npm run build
CMD ["node", "server.js"]