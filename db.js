const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'kashi', 
  password: 'kashi123', 
  database: 'travel_agency', 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to the MySQL database!');
});

// API endpoint to handle form submissions
app.post('/register', (req, res) => {
   
    console.log('Request body:', req.body); // Log incoming data
  
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      console.error('Missing required fields');
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

  // Insert data into the `users` table
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).json({ message: 'Error saving data to the database' });
      return;
    }
    res.status(200).json({ message: 'Registration successful! Welcome aboard.' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
