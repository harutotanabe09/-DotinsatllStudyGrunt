## Docker Start Grunt

Gruntを始めるための環境構築

## How to Start

Dockerfileをビルド。ビルド名：my-grunt-app

docker build -t my-grunt-app .

ビルドしたDockerfileを実行。実行しているDokcerに入る —rm：実行後ビルド削除。

 docker run -d  --name my-running-app my-grunt-app

タスク実行後のファイル取得

docker cp  <コンテナID>:/usr/src/app/styles1.css styles1.css

docker cp  <コンテナID>:/usr/src/app/styles2.css styles2.css:

## Learning Text

Grunt - Node.jsを利用したタスク自動化ツール