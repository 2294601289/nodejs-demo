// 请求(require)一个 nodejs 自带的 http模块
// 请求(require)一个 nodejs 自带的 url解析模块
const http = require('http'),
    url = require('url'),
    querystring = require('querystring')

var Respresult = require('../service/_common_entity/Respresult')

// 导出方法：创建http服务器
exports.create = function (route, port, version) {
    // 指定服务端口
    const serveport = port || '9090'
    // http模块创建http服务器，并指定端口
    http.createServer(function (request, response) {
        // 1、获取请求路径名
        let urlpathname = url.parse(request.url).pathname
        console.log('requesturl=>', urlpathname)

        // 2、屏蔽谷歌默认访问favicon.ico请求
        if (!urlpathname.indexOf('/favicon.ico')) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            response.end()
            return
        }

        // 3、服务版本判断
        const server_version = version || 'v1'
        const request_version = urlpathname.split('/')[1]
        // console.log(server_version,request_version)
        if (server_version !== request_version) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            response.write( '本服务的版本号为：' + server_version + '，请修改您请求的版本号')
            response.end()
            return
        }

        // 4、处理请求
        try {
            // 请求方法（string类型） GET、POST
            let reqmethod = request.method
            let parameters = url.parse(request.url, true).query
            let fromdata = ''
            request.on('data',function (chunk) {
                console.log(chunk)
                fromdata += chunk
            })
            request.on('end',function () {
                console.log('==>')
                fromdata = decodeURI(fromdata)
                console.log(fromdata = querystring.parse(fromdata))
                console.log(fromdata.k1,fromdata.k2)
            })
            console.log(parameters)
            // 根据请求路径匹配对应服务，并返回出参
            let resdata = route(reqmethod, urlpathname.split(server_version)[1])
            // 响应
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            // console.log(resdata)
            response.write(resdata)
        } catch (e) {
            console.error(e)
            response.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
            response.write(Respresult.Result(500, '服务异常', ''))
        } finally {
            response.end()
        }
    }).listen(serveport)
    console.log('Server ==>> http://127.0.0.1:' + serveport + '/' + version)
}
