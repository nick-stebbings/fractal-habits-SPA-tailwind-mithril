FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN ls -ls
CMD ["npm", "run", "build"]