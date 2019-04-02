const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


// returns from db restaurant with id that matches # at the end of endpoint
const getDataForId = (id, callback) => {
  connection.query('SELECT * FROM restaurants WHERE id = ?', id, (error, results) => {
    if (error) {
      console.log('error with getRestaurantData', error);
    }
    callback(null, results);
  });
};

// returns all restaurants from db
const getAllRestaurants = (callback) => {
  connection.query('SELECT * FROM restaurants', (error, results) => {
    if (error) {
      console.log('error getting all data', error);
    }
    callback(null, results);
  });
};

// SQL query to seed database: called in data.js
const generateData = (id, name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, callback) => {
  connection.query(`INSERT INTO restaurants VALUES (?,?,?,?,?,?,?,?,?,?)`, [id, name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3], (error, results) => {
    if (error) {
      console.log('error generating data', error);
    }
    callback(null, results);
  });
};

module.exports = { getDataForId, getAllRestaurants, generateData };