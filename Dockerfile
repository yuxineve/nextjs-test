# 基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到镜像中
COPY package*.json ./

# 安装依赖
RUN npm install

# 将项目文件复制到镜像中
COPY . .

# 设置环境变量
ENV NODE_ENV production

# 执行打包命令
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]


# docker build -t your-image-name .
# docker run -p 3000:3000 your-image-name