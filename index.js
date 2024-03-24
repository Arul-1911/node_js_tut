const logEvents = require("./logevents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("log", (msg) => {
 logEvents(msg)
});
myEmitter.emit("log",'log event emitted');  
