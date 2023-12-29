// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files (like CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// SQLite database setup
const db = new sqlite3.Database('users.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      password TEXT,
      familyName TEXT,
      phoneNumber TEXT,
      userType TEXT,
      grade TEXT,
      fieldOfInterest TEXT,
      region TEXT,
      country TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);
  }
});


// // Route for index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/new-account.html'));
// });

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/start.html'));
});

// Route for details.html
app.get('/about-you', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about-you.html'));
});

// Route for account-detail.html
app.get('/account-detail', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/account-detail.html'));
});


// Route to handle user registration
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Store user account information in the database
  db.run('INSERT INTO users (username, password, timestamp) VALUES (?, ?, CURRENT_TIMESTAMP)', [username, password], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }

    console.log(`A new user has been registered with id ${this.lastID}`);
    res.redirect('/about-you'); // Redirect to about-you.html
  });
});

// Route to handle form submission from about-you.html
app.post('/submit-about-you', (req, res) => {
  const familyName = req.body.familyName;
  const phoneNumber = req.body.phoneNumber;
  const userType = req.body.userType;
  const grade = req.body.grade;

  // Update the previously inserted row with the additional information and timestamp
  db.run('UPDATE users SET familyName = ?, phoneNumber = ?, userType = ?, grade = ?, timestamp = CURRENT_TIMESTAMP WHERE id = (SELECT MAX(id) FROM users)', 
    [familyName, phoneNumber, userType, grade], function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }

      console.log(`Row updated with additional information and timestamp`);
      res.redirect('/account-detail'); // Redirect to about-you.html
  });
});

// Route to handle form submission from account-detail.html
app.post('/submit-account-detail', (req, res) => {
  const fieldOfInterest = req.body.fieldOfInterest;
  const region = req.body.region;
  const country = req.body.country;

  // Update the previously inserted row with the additional information and timestamp
  db.run('UPDATE users SET fieldOfInterest = ?, region = ?, country = ?, timestamp = CURRENT_TIMESTAMP WHERE id = (SELECT MAX(id) FROM users)', 
    [fieldOfInterest, region, country], function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }

      console.log(`Row updated with account details and timestamp`);
      res.send('Account details submitted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
