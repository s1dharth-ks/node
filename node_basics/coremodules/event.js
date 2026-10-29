const eventEmitter = require("events")
const event = new eventEmitter()

// event.on('greet',()=>{
//     console.log("helloo....")
// })

// event.emit("greet")
// event.emit("greet")
// event.emit("greet")

// event.on('greet',(name)=>{
//     console.log(`helloo... ${name}`)
// })

// event.once("initial",()=>{
//     console.log("welcome")
// })

// event.emit('initial')
// event.emit('initial')
// event.emit('greet',"anu")

function greet(){
    console.log("hello broo");
    
}

event.on("greet",greet)
event.emit("greet")
event.off("greet",greet)
event.emit("greet")