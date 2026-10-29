const { error } = require("console")
const fs = require("fs")

// const readStream = fs.createReadStream("data.txt")

// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString())
// })
// fs.readFile("video.mp4",(error,data)=>{
//     console.log(data)
// })

// const readedFile = fs.createReadStream("video.mp4")

// // console.log(readedFile);

// readedFile.on("data",(chunk)=>{
//     console.log("recievedchunks",chunk.length);
    
// })

const writeStream = fs.createWriteStream("output.txt")

writeStream.write("Hello NodeJs\n")
writeStream.write("Hellooo")

writeStream.end()