const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// Create a new task
app.post('/', (req, res) => {
    const { task } = req.body;

    if (!task || typeof task !== 'string') {
        return res.status(400).json({ message: 'Task is required and should be a string' });
    }

    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = { id: newId, task };
    tasks.push(newTask);
    res.status(201).json({ message: 'Task added', task: newTask });
});

// Update a task by ID
app.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id); 
    if (isNaN(taskId)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const taskIndex = tasks.findIndex(t => t.id === taskId); 
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        task: req.body.task || tasks[taskIndex].task
    };

    res.json({ message: 'Task updated successfully', task: tasks[taskIndex] });
});

// Delete a task by ID
app.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id); 
    if (isNaN(taskId)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const taskIndex = tasks.findIndex(t => t.id === taskId); 
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully' });
});

// Get all tasks
app.get('/', (req, res) => {
    res.json(tasks);
});

// Get a specific task by ID
app.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    if (isNaN(taskId)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
});

app.listen(port, (req, res) => {
     console.log(`Server running at http://localhost:${port}`);
})