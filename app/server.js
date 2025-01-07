const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Replace with your host
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "PawPal", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// Endpoint to insert user data
app.post("/signup", (req, res) => {
  const { firstName, lastName, userName, emailAddress, phoneNumber, password, streetAddress, city, region, dogDetails } = req.body;

  // Insert into USERS table
  const userQuery = `INSERT INTO USERS (FirstName, LastName, UserName, EmailAddress, PhoneNumber, Password) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(userQuery, [firstName, lastName, userName, emailAddress, phoneNumber, password], (err, userResult) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting user data.");
      return;
    }

    const userID = userResult.insertId;

    // Insert into ADDRESS table
    const addressQuery = `INSERT INTO ADDRESS (UserID, StreetAddress, City, Region) VALUES (?, ?, ?, ?)`;
    db.query(addressQuery, [userID, streetAddress, city, region], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting address data.");
        return;
      }
    });

    // Insert into DOG_DETAILS table if provided
    if (dogDetails) {
      const dogQuery = `INSERT INTO DOG_DETAILS (UserID, DogName, DogBreed, DogAge, DogGender, VaccinationStatus, DogImage) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      dogDetails.forEach((dog) => {
        const { dogName, dogBreed, dogAge, dogGender, vaccinationStatus, dogImage } = dog;
        db.query(dogQuery, [userID, dogName, dogBreed, dogAge, dogGender, vaccinationStatus, dogImage], (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error inserting dog details.");
            return; 
          }
        });
      });
    }

    res.status(200).send("User registered successfully.");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
