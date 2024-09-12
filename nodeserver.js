const http = require('http')
const port = 4000

const server = http.createServer(function(req, res) {

})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong, Kune Smoko!', error)
    } else {
        console.log('Server is listening on port', port)
    }
    })