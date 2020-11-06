const common = require('./_00_common')
const business01 = require('./_01_business')

var Respresult = require('../service/_common_entity/Respresult')

// 路由模块,针对不同的请求,做出不同的响应
exports.route = function (reqmethod, reqpathname, parameters, fromdata) {
    console.log('===', reqpathname)
    let result = Respresult.Result(-1, '服务出错啦', '')
    if (reqpathname) {
        console.log(reqpathname.split('/'))
        let businesname = reqpathname.split('/')[1]
        switch (businesname) {
            case 'common' :
                result = common.route(reqmethod, reqpathname.split('common')[1], parameters, fromdata)
                break;
            default:
                result = Respresult.Result(0, '无效业务路径', '')
        }
    } else {
        result = Respresult.Result(0, '无业务路径', '')
    }
    return result
}
