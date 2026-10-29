const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    const newUrl = url.parse(req.url)
    if(newUrl.pathname === "/"){
        fs.readFile("index.html",(err,data)=>{
            if(err){
                // res.end("file not found")
                res.writeHead(404,{ "content-type":"text/html" })
                res.end("file not found")
            }else{
                res.writeHead(200,{ "content-type":"text/html" })
                res.end(data)
            }
            res.end()
        })
    }else if(newUrl.pathname === "/about"){
        fs.readFile("about.html","Utf8",(err,data)=>{
            if(err){
                res.end("file not found")
            }else{
              
                res.write(data)
                res.end()
            }
            res.end()
        })
    }else{
        res.end("file not found")
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})