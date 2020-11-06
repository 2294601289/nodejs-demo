const http = require('http');

const httpservice = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('welcome ！')
    res.end()
})
httpservice.listen(7070)
