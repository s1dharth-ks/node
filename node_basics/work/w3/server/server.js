const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res)=>{
    const newURl = url.parse(req.url)
    if(newURl.pathname === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/index.html"))
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000");  
})