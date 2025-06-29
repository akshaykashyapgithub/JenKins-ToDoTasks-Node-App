const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

// Sample in-memory tasks route
let tasks = [];
let id = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const task = { id: id++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
