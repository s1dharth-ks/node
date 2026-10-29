const { log } = require("node:console");
const { buffer } = require("node:stream/consumers");

const buff = Buffer.from("hello")

console.log(buff);

console.log(buff.toString());

const Buff = Buffer.alloc(5)
console.log(Buff);

