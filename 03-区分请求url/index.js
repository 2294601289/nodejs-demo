// 引入http服务
const server = require('./server/_server')
// 引入路由
const router = require('./router/_router')

// 调用http服务方法
server.create(router.route, 8091, 'v3')
