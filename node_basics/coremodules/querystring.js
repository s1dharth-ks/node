// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);

const queryString = require("querystring")

// const result = queryString.parse("limit=10&skip=10&select=title,price")
// console.log(result);

const data = {
    name:"aswin",
    course:"mern"
}

console.log(queryString.stringify(data))