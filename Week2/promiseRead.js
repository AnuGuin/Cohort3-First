const fs = require('fs');

//Promisified version of fs.readFile using a Promise
function readFilePromisified(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Usage
readFilePromisified('a.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

