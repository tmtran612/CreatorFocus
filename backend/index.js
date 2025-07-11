const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// PostgreSQL connection settings
const pool = new Pool({
  user: 'postgres',       // <-- Replace with your actual PostgreSQL username
  host: 'localhost',
  database: 'tasks',          // <-- Make sure your DB is named 'tasks'
  password: 'testlock099', // <-- Replace with your actual password
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());


// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, title, description, priority, category FROM tasks ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST a new task
app.post('/api/tasks', async (req, res) => {
  console.log('Received body:', req.body); // Debug log
  const { title, description, priority = 'Medium', category = 'General' } = req.body;
  try {
    await pool.query(
      'INSERT INTO tasks (title, description, priority, category) VALUES ($1, $2, $3, $4)',
      [title, description, priority, category]
    );
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
