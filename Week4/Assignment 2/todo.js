const { Command } = require('commander')
const fs =  require('fs')
const path = require('path')
const program = new Command()

program
    .name('todo')
    .description('CLI tool to make a toto JSON fike that lets you add, remove and mark todo done')
    .version('1.0.1')


program.command('todo')
    .description('CLI tool to make a toto JSON fike that lets you add, remove and mark todo done')
    .argument('<file>','File Path')
    .option('--atd <task>', 'Lets you add todo in the file')
    .option('--dlt <id>', 'Lets you delete todo from the file')
    .option('--mkd <id>', 'Lets you mark a tpdp done')
    .option('--list', 'Gives all the todo list')
    .action((file, options) =>{
        if (!fs.existsSync(file)) {
        fs.writeFileSync(file, JSON.stringify([]), 'utf-8');
        console.log("New File created:", file);
        }

        let todos;
        try {
            const content = fs.readFileSync(file, 'utf-8').trim();
            todos = content ? JSON.parse(content) : [];
        } catch (err) {
            console.error("Error reading JSON file. Creating fresh list.");
            todos = [];
        }

        let id = todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1; //Fixed, before I was using 0

        if(options.atd){
            const newTodo = {   
                id:id,
                task: options.atd, 
                status:false
            };
            todos.push(newTodo);
            console.log(`New task added, ${newTodo.task}`);
        }

        if(options.dlt){
            const idx = todos.find(t => t.id === parseInt(options.dlt));
            if(idx != -1){
                const deleted = todos.splice(idx, 1)[0];
                console.log(`Task Deleted: ${deleted.task}`);
                id--;
            } else {
                console.log('No task is found');
            }
        }

        if(options.md){
            const status = todos.find(b => b.id ===parseInt(options.mkd));
            if(status){
                status.done = true;
                 console.log(`Marked done ${status.task}`);
            } else {
                console.log('No task is found');
            }
        }

        if(options.list){
            todos.array.forEach(todo => {
                const status = todo.done ? "Completed" : "Pending";
                console.log(`${status} [${todo.id}] ${todo.task}`);
            });
        }
         fs.writeFileSync(file, JSON.stringify(todos, null, 2), 'utf-8');    
        
    });

    program.parse();

