const { log } = require("console");
const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.write("hello world")
//     // console.log(req);  
//     console.log(res)
//     res.end()
// })

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("home page")
    }else if(req.url === "/about"){
        res.end("About Page")
    }else{
        res.end("page not found...")
    }
})

server.listen(3000,()=>{
    console.log("http://localhost:3000")
})