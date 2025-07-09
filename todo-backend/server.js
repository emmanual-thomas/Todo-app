const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Todo = require('./models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb+srv://admin:admin123@cluster0.g2hsgxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Mongo Error:', err));


app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const saved = await newTodo.save();
  res.json(saved);
});

app.put('/api/todos/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
