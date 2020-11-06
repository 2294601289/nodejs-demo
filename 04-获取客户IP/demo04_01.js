var express = require('express')
var app = express()
const requestIp = require('request-ip');
app.use(requestIp.mw())
app.use(function(req, res) {
    const ip = req.clientIp;
    res.end(ip);
})

app.get('/about', function (req, res) {
    console.log(req.query)
    res.send('你好，我是 Express!')
})

// 4 .启动服务
app.listen(3000, function () {
    console.log('app is running at port 3000.')
})
