const http = require("http")
const fs = require("fs")
const url = require("url")

const app = http.createServer((req,res)=>{
    const {pathname} = url.parse(req.url)
    if(pathname === "/"){
        res.writeHead(200,{"content-type": "text/html"})
        res.end(fs.readFileSync("../client/index.html"))
    }else if(pathname === "/index.js"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/index.js"))
    }
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})