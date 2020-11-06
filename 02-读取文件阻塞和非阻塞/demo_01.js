const fs = require('fs')
console.log('阻塞')
console.log('>>>start')

var data = fs.readFileSync('temp.txt')

console.log('temp.txt文件中数据：\r\n' + data.toString())

console.log('<<<end')
