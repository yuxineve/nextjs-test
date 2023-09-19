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

# https://swr.bootcss.com/
# useSWRImmutable  禁用自动重新请求
# // 有条件的请求
# const { data } = useSWR(shouldFetch ? '/api/data' : null, fetcher)

# 参数
# useSWR('/api/user', () => fetcher('/api/user'))
# useSWR('/api/user', url => fetcher(url))
# useSWR('/api/user', fetcher)

# 相反，你可以使用一个 数组 作为参数 key，它包含 fetcher 的多个参数：
# const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

# 你可以直接传递一个对象作为 key，fetcher 也会接收该对象：
# const { data: orders } = useSWR({ url: '/api/orders', args: user }, fetcher)

# 分页 UI
# function App () {
#   const [pageIndex, setPageIndex] = useState(0);

#   // API URL 包括页面索引，它是一个 React state。
#   const { data } = useSWR(`/api/data?page=${pageIndex}`, fetcher);

#   // ... 处理加载和错误状态

#   return <div>
#     {data.map(item => <div key={item.id}>{item.name}</div>)}
#     <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
#     <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
#   </div>
# }

# https://www.zcwsr.com/post/639bb670-284f-11ed-9178-bddf102e33da
