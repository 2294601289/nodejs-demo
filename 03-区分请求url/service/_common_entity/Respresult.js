'use strict'

exports.Result = function (code, msg, content) {
    this.code = code
    this.msg = msg
    this.content = content
    return JSON.stringify({
        'code': this.code,
        'msg': this.msg,
        'content': this.content
    })
}
