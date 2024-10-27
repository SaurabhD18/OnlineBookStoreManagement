const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'saurabh9',
  database: 'onlinebookstoremanagementsystem'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

app.listen(3007, () => {
  console.log('Server running on port 3007');
});

// Add your API routes here

// Add customer
app.post('/api/customers', (req, res) => {
    const { email, name, address, customerid, phoneno } = req.body;
    const sql = 'INSERT INTO customers (email, name, address, customerid, phoneno) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [email, name, address, customerid, phoneno], (err, result) => {
      if (err) throw err;
      res.send('Customer added');
    });
  });
  
  // Get customers
  app.get('/api/customers', (req, res) => {
    const sql = 'SELECT * FROM customers';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
  
  // Similarly, add endpoints for books, orders, reviews, etc.
  