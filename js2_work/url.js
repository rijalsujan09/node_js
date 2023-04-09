const http  = require("http");
const url  =  require("url");


http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<h1>Hi! This is Test.</h1>")
    console.log(request.url);
    const urlob =  url.parse(request.url, true);
    console.log(urlob);
    console.log(urlob.query.keywords);
    response.end();
}).listen(8081);