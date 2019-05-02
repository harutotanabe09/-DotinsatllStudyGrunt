##Docker Start Grunt

Gruntを始めるための環境構築

## How to Start

Dockerfileをビルド。ビルド名：my-grunt-app

docker build -t my-grunt-app .

ビルドしたDockerfileを実行。実行しているDokcerに入る —rm：実行後ビルド削除。

docker run  --rm --name my-running-app my-grunt-app

## Learning Text

Grunt - Node.jsを利用したタスク自動化ツール