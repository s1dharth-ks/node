const http = require("http")
const url = require("url")
const fs = require("fs")
const queryString = require("querystring")

const students = []

const server = http.createServer((req,res)=>{
    const newUrl = url.parse(req.url)
    if(newUrl.pathname === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/index.html"))
    }

    if(newUrl.pathname === "/indexjs"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/js/index.js"))
    }

    if(newUrl.pathname === "/addstudent"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/pages/add.html"))
    }

    if(newUrl.pathname === "/submit" && req.method == "POST"){
        let body = ""
        req.on("data",(chunks)=>{
            body += chunks.toString()
        })
        req.on("end",()=>{
            const formatData = queryString.parse(body)
            students.push(formatData)
        })
        res.writeHead(201,{"content-type":"text/html"})
        res.end(fs.readFileSync('../client/index.html'))

        
    }

    if(newUrl.pathname === "/getstudents" && req.method == "GET"){
        const jsonData = JSON.stringify(students)
        res.writeHead(200,{"content-type":"text/json"})
        res.end(jsonData)
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000");
})