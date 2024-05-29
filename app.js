const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/tasks', (req, res) => {
    if (tasks.length === 0) {
        res.status(404).send('No tasks found.');
    } else {
        res.status(200).json(tasks);
    }
});

app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;

    let id;
    if (tasks.length === 0){
        id = 1;
    }
    else {
        id = tasks[tasks.length - 1].id + 1;
    }

    const newTask = {
        id,
        title,
        description,
        status
    }

    tasks.push(newTask);
    res.status(201).json(newTask);
})

app.get('/tasks/:id', (req, res) => {
    let id =  req.params.id;

    if (tasks.length === 0) {
        res.status(404).send('No tasks found.');
    }
    else {
        const foundTask = tasks.find(task => String(task.id) === id);
        if (foundTask) {
            res.status(200).json(foundTask);
        } else {
            res.status(404).send('Task not found.');
        }
    }
})

app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, status } = req.body;

    const taskIndex = tasks.findIndex(task => String(task.id) === id);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description || tasks[taskIndex].description,
            status: status || tasks[taskIndex].status
        };
        
        res.status(200).json(tasks[taskIndex]);
    } else {
        res.status(404).send('Task not found.');
    }
})

app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    const taskIndex = tasks.findIndex(task => String(task.id) === id);

    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        
        res.status(200).json(deletedTask[0]);
    } else {
        res.status(404).send('Task not found.');
    }
})

const port = process.env.PORT || 3000; // Set the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});