const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for local frontend
app.use(cors());
app.use(express.json());

// Connect to MySQL (adjust user, password, database)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // change if needed
    password: 'root',           // your MySQL password
    database: 'machinery_db' // use your DB name!
});

// Add a Machinery (POST)
app.post('/machinery', (req, res) => {
    const { name, price, description, status } = req.body;
    db.query(
        'INSERT INTO machinery (name, price, description, status) VALUES (?, ?, ?, ?)',
        [name, price, description, status],
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ success: true });
            }
        }
    );
});

// View All Machinery (GET)
app.get('/machinery', (req, res) => {
    db.query('SELECT * FROM machinery', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
