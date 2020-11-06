const fs = require('fs')
console.log('非阻塞')
console.log('>>>start')

fs.readFile('temp.txt', function (err, data) {
    if (err) return console.error(err)
    console.log('temp.txt文件中数据：\r\n' + data.toString())
})


console.log('<<<end')
