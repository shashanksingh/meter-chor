var http = require("http");

function start() {
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(8000);

console.log("Server has started.");
}

exports.start = start;

