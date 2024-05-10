const data = require("./data.js")
const fn = require("../countAllPeople.js")

let result = fn.countAllPeople(data.houses);
console.log(result)