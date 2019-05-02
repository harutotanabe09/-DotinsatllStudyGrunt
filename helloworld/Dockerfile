
FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install -g grunt-cli

RUN npm install grunt --save-dev

CMD grunt

EXPOSE 8888
