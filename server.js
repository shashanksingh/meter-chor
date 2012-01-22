var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("New Request for ", pathname);
        route(handle,pathname,response);
    }).listen(8000);

console.log("Server has started.");
}

exports.start = start;

