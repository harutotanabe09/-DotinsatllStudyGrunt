
FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install -g grunt-cli

RUN npm install grunt --save-dev

RUN npm install -g less

RUN npm install grunt-contrib-less --save-dev

RUN npm install grunt-contrib-csslint --save-dev

RUN npm install grunt-contrib-cssmin --save-dev

RUN npm install grunt-contrib-watch --save-dev 

CMD grunt


