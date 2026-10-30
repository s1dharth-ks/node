const { log, error } = require("console")
const http = require("http")
const fs = require("fs")
const url = require("url")
const { type } = require("os")

const server = http.createServer((req,res)=>{
    const newUrl = url.parse(req.url)
    if(newUrl.pathname === "/"){
        fs.readFile("home.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                res.end("page not found")
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(data); 
}
        })
    }else if(newUrl.pathname === "/about"){
        fs.readFile("about.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                res.end("page not found")
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(data)
            }
        })
    }else if(newUrl.pathname === "/contact"){
        fs.readFile("contact.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                res.end("page not found")
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(data)
            }
        })
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("page not found")
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000")
})