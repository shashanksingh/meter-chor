var http = require("http");
var url = require("url");

function start(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname
        console.log("New Request for ", pathname);
        route(pathname);
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(8000);

console.log("Server has started.");
}

exports.start = start;

