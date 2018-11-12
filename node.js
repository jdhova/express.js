var x = "hello"
console.log(x)

const http = require('http');

const server = http.createServer((request,response) => {
    var happy = true

    if (happy) {
        response.write("im happy")
    } else {
        response.write ('im sad')
    }

    response.end
});

server.listen(80);