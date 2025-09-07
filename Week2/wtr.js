//write a code that reads a file, then trims the whitespace from the file and logs the result

const fs = require('fs');

function cleanFile(filePath){
    return new Promise((resolve,reject) => {
        fs.readFile(filePath, 'utf-8', (err,data) => {
            if(err){
                return reject(err)
            };    
            const trimmeddata = data.trim();
        fs.writeFile(filePath, trimmeddata, err => {
            if(err){
                return reject(err)
            } 
            resolve(data);   
        });
    });

});

}

async function solve() {
    try {
        const result = await cleanFile('ads.txt');
        console.log("Trimmed content written successfully:\n", result);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

solve();

