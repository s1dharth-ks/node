const { error } = require("console");
const fs = require("fs");

// fs.mkdir("myFolder",(error)=>{
//     if(error) throw error;
//     console.log("folder Created");
// })

// fs.writeFile("myFolder/newFile.txt","hello world",(error)=>{
//     if(error) throw error;
//     console.log("file created")
// })

// fs.readFile("myFolder/newFile.txt","Utf8",(error,data)=>{
//     if(error) throw error;
//     console.log(data)
// })

// fs.appendFile("myFolder/newFile.txt","\nhello world",(error)=>{
//     if(error) throw error;
//     console.log("file updated")
// })

// fs.unlink("myFolder/newFile.txt",(error)=>{
//     if(error) throw error;
//     console.log("file deleted")
// })

fs.rmdir("myFolder",(error)=>{
    if(error) throw error;
    console.log("folder deleted")
})

