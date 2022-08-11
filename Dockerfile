FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

# 安装依赖
RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production
# 打包
RUN yarn build

FROM nginx:latest
# 将上一步打包后的文件copy到nginx里面
COPY --from=node:16 dist /usr/share/nginx/html

EXPOSE 80
