var http  = require("http");
var dt = require("./date");
var url = require('url');
var fs = require("fs");
var uc = require('upper-case');

// // creating a server object 
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'}); 
//     res.write("Namestey Nepal.")// writes a response to the client
//     //res.write("The dateand time are currently: "+ dt.myDateTime());
//     res.write(req.url);
//     res.end(); // end the response
// }).listen(8080); // server object  listen on port 8080

//----------------------------------------------------------

// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type':'text/html'});
//   // response.write("I am sujan rijal");
//   var q = url.parse(request.url, true).query;
//   var txt  = q.year+" "+q.month; 
//   response.end(txt);
// }).listen(8080);

//---------------------------------------------------------------

// // we can also use node.js as a file server
// http.createServer(function(req, res){
// fs.readFile('demo1.html', function(err , data){
//   res.writeHead(200, {"Content-Type":"text/html"});
//   res.write(data) 
//   return res.end();
// });
// }).listen(8080);

//----------------------Creating file--------------------------

//--->creating new file using .appendFile()
// fs.appendFile("newfile.txt", "Hello Content!", function(err){
//   if(err) throw err;
//   console.log('saved!');
// });

//--->creating file with  .open()
// fs.open("myfile.txt", "w", function(err, file){
//   if(err) throw err;
//   console.log("saved");
// });

//--->creating file with   .writeFile()
// fs.writeFile("myFileWork.txt", "Hello Content!!!", function(err){
//   if(err) throw err;
//   console.log("saved");
// });

//----------------------Update file--------------------------

//---> update file with .appendFil()
// fs.appendFile("newfile.txt", "Hi am java full stack  developer. \nI work in Jp Morgan Chase Bank.", function(err){
//   if(err) throw err;
//   console.log("updated");
// });

//---> update file witth .writeFile()
// fs.writeFile("myfile.txt", "Hi! am Sujan Rijal and I am Java Developer.", function(err){
//   if(err) throw err;
//   console.log("Updated..!");
// });

//--------------------------delete file---------------------------------
//--->deleting file with .delete() method
// fs.unlink("myFileWork.txt", function(err){
//   if(err) throw err;
//   console.log("deleted...");
// })

//--------------------------rename file---------------------------------
// //--->renaming file with  .rename() method
// fs.rename("demo1.html", "demo.html", function(err){
//   if(err) throw err;
//   console.log("renamed sucessfull...")
// })


// ========================================================================================

// ---> The Built-in URL Module 

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log("local host => ",q.host); //returns 'localhost:8080'
// console.log("path name => ",q.pathname); //returns '/default.htm'
// console.log("search query => ",q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log("search month => ",qdata.month); //returns 'february'


// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
