var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");
 var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(body);
        response.end();
  });

}

function upload(response) {
    console.log("inside upload");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("upload");
    response.end();
}


//function start() {
//console.log("inside start");
//}

exports.upload = upload;
exports.start = start;
