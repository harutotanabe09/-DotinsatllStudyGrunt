
FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install -g grunt-cli

RUN npm install grunt --save-dev

RUN npm install -g less

RUN npm install grunt-contrib-less --save-dev

# Taskをマルチ実行
# CMD grunt

# DockerのCMDはラスト一回のみ
RUN grunt task1

RUN grunt task2

EXPOSE 8888
