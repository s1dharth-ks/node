const http = require("http")
const url = require("url")
const fs = require("fs")
const queryString = require("querystring")
const {MongoClient,ObjectId} = require("mongodb")
const { error } = require("console")
const { json, text } = require("stream/consumers")
const client = new MongoClient( "mongodb://127.0.0.1:27017")
const db = client.db("Data")
const collection = db.collection("students")

// const students = []

const server = http.createServer(async(req,res)=>{
    const newUrl = url.parse(req.url)
    if(newUrl.pathname === "/"){
        // console.log(body);
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/index.html"))
        
    }

    if(newUrl.pathname === "/indexcss"){
        res.writeHead(200,{"content-type":"text/css"})
        res.end(fs.readFileSync("../client/css/index.css"))
    }

    if(newUrl.pathname === "/indexjs"){
        res.writeHead(200,{"content-type":"text/js"})
        res.end(fs.readFileSync("../client/js/index.js"))
    }

    if(newUrl.pathname === "/addstudent"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("../client/pages/add.html"))
    }

    if(newUrl.pathname === "/addcss"){
        res.writeHead(200,{"content-type":"text/css"})
        res.end(fs.readFileSync("../client/css/add.css"))
    }

    if(newUrl.pathname === "/submit" && req.method == "POST"){
        let body = ""
        req.on("data",(chunks)=>{
            body += chunks.toString()
        })
        req.on("end",async()=>{
            const formatData = queryString.parse(body)
            await collection.insertOne(formatData)
            res.writeHead(302,
                {location:"/"}
            )
            res.end()
            // students.push(formatData)
        })

        
    }

    if(newUrl.pathname === "/getstudents" && req.method == "GET"){
        let students = await collection.find().toArray()
        const jsonData = JSON.stringify(students)
        res.writeHead(200,{"content-type":"text/json"})
        res.end(jsonData)
    }

    if(newUrl.pathname === "/deletstudent" && req.method == "DELETE"){
        let body = ""
        req.on("data",(chunks)=>{
            body += chunks.toString()
        })
        req.on("end",async()=>{
            const _id = new ObjectId(body)
            await collection.deleteOne({_id})
            res.writeHead(200,{"content-type":"text/plain"})
            res.end("success")
        })
    }

    if(newUrl.pathname === "/updatestudent" && req.method == "PUT"){
        let body = ""
        req.on("data",(chunks)=>{
            body += chunks.toString()
        })
        
        
        req.on("end",async()=>{
            
            const {name,roll,age,id} =  JSON.parse(body)
            const _id = new ObjectId(id)
            try{
                await collection.updateOne({_id},{$set:{name,roll,age}})
                res.writeHead(200,{"content-type":"text/plain"})
                res.end("success")
            } catch (error){
                res.writeHead(501,{"content-type":"text/plain"})
                res.end("server error")
            }
        })
    }
    
})

server.listen(3000,()=>{
    console.log("http://localhost:3000");
})