var http = require('http')

http.createServer(function (req, res) {
    // req.setTimeout(360000)

    // 打印请求路径
    console.log('==>', req.url)

    // 发送 HTTP 响应头部
    // HTTP 状态值：200，ok
    // 内容类型：text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // 发送响应数据
    res.end('hello wrold\n')

}).listen(7070)

// 终端打印信息
console.log('Server running at http://127.0.0.1:7070/')
