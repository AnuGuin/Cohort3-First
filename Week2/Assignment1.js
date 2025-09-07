//Creating a fs.writeFile function that returns a Promise
const fs = require('fs');

function writeFilePromisified(path, data, encoding){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, encoding, err => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

//Usage

writeFilePromisified('a.txt', "Hello world", 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.error(err));