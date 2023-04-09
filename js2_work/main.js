const http = require("http");
const op  = require("../mymodule/avg")


let avg =  op(2,3,4);

const server = http.createServer((req , res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.write("<h2></h2>");
    res.write("<button>Click Me</button><br/>")
    res.end();
});

server.listen(8090);
console.log("the average  : "+avg);