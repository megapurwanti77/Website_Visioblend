const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan user MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'visoblend' // Ganti dengan nama database Anda
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// Routes
// Sign Up Endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  
  // Check if email already exists
  db.query('SELECT * FROM tbl_signup WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      res.status(400).send('Email already exists');
    } else {
      // Insert new user
      db.query('INSERT INTO tbl_signup (email, password) VALUES (?, ?)', [email, password], (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Failed to signup');
        } else {
          res.status(200).send('Signed up successfully');
        }
      });
    }
  });
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM tbl_signup WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        const storedPassword = results[0].password;
        if (password === storedPassword) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      } else {
        res.status(404).send('User not found');
      }
    }
  });
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
