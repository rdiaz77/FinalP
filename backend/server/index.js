let http = require('http')
let server = http.createServer(function (req, res) {
    res.write('Hello FSD!')
    res.end()
})

server.listen(3000, function () {
    console.log('I am awake!')
})

