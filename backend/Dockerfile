FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

RUN chmod +x wait-for.sh

ENTRYPOINT /wait-for.sh demo-mongo:27017 -- npm run start-dev
