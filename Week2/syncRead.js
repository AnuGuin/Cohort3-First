const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");/*ut-8 is an encoding to represent english language*/
console.log(contents);
