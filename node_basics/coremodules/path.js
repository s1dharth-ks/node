const { log } = require("console")
const path = require("path")

const fileName = "/user/files/index.html"
// console.log(path);

// const result = path.basename(fileName)
// console.log(result);

// const result = path.extname(fileName)
// console.log(result);

// const result = path.dirname(fileName)
// console.log(result);

// const result = path.parse(fileName)
// console.log(result);

// const dirpath = "/user/files"
// const file = "index.html"

// const result = path.join(dirpath,file)
// console.log(result);


// const relativePath = "./users/files"
// const absolutePath = path.resolve(relativePath)
// console.log(absolutePath);

const messypath = "./users/files///index.html"
const normalizePath = path.normalize(messypath)
console.log(normalizePath)