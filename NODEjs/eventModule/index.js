const EventEmitter = require("events");
const event = new EventEmitter();

event.on("myName", ()=>{
    console.log("My Name is Jahanzaib")
})

event.on("checkPage",(sc , msg) => {
    console.log(`the status code is ${sc} and message is ${msg}`)
})
event.emit("myName");
event.emit("checkPage",404,"Page Not Found")