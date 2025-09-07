const { Command } = require ('commander')
const fs = require('fs')
const program  = new Command();
program
    .name('word_counter')
    .description('A CLI for counting words in a .txt file')
    .version('0.0.1')

program.command('count')
    .description('counts the number of words in a .txt file in a single command')    
    .argument('<file>','Path to txt file')
    .action((file) => {

        fs.readFile(file, 'utf-8', (err,data) => {
            if(err) {
                console.log(err);
            } else {
                const count = data.trim().split(/\s+/);
                console.log(`Number of word in the text file is ${count.length}`);
            }
        });

    });

    program.parse();