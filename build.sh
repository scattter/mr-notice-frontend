#!/bin/bash

# 本地build镜像(指定dockerfile文件)
docker build -f ./dev-build/Dockerfile -t vite . --no-cache
# 本地打tag
docker tag vite 10.253.17.37:5000/vite:latest
# 删除无用的镜像
# 由于经常重复打包, 所以使用下面的命令删除无用的镜像
docker rmi $(docker images -f "dangling=true" -q)
# 推送到私有仓库
docker push 10.253.17.37:5000/vite:latest
