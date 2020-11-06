var Respresult = require('../service/_common_entity/Respresult')

// 路由模块,针对不同的请求,做出不同的响应
exports.route = function (reqmethod, reqpathname, parameters, fromdata) {
    console.log('===', reqpathname)
    let result = Respresult.Result(-1, '服务出错啦', '')
    if (reqpathname) {
        console.log(reqpathname.split('/'))
        let servername = reqpathname.split('/')[1]
        switch (servername) {
            case 'login' :
                result = Respresult.Result(0, 'login', '')
                break;

            default:
                result = Respresult.Result(0, '无效服务路径', '')
        }
    } else {
        result = Respresult.Result(0, '无服务路径', '')
    }
    return result
}
