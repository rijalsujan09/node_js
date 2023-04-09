const fs = require("fs");

//----------> read file
//asynchronous way
// fs.readFile('./check.json', (error, data) =>{
//     if(error){
//         console.log(error);
//         console.log("...error occured...");
//     }
//     else{
//         console.log(data.toString());
//     }
// });


//-------------> create file
// let content = "Hi i am java dev !";
// fs.writeFile("new_file.txt", content, function(error){
// if(error) throw error;
// else console.log("----saved----")
// })


//-------------> append file
// fs.appendFile("abc.txt", content , (error) =>{
//     if(error){
//         console.log(error);
//         console.log("error occured..!");
//     }
//     else{
//         console.log("----saved----");
//     }
// } );

//-----------> delete file
fs.unlink("new_file.txt", (err) =>{
    if(err) throw err;
    else{
        console.log("----deleted---- ")
    }
})

console.log("Executed ....");