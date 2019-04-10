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

// SQL query to seed restaurants table: called in data.js
const generateDataForRestaurants = (id, name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, callback) => {
  connection.query(`INSERT INTO restaurants VALUES (?,?,?,?,?,?,?,?,?,?)`, [id, name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3], (error, results) => {
    if (error) {
      console.log('error generating data', error);
    }
    callback(null, results);
  });
};

module.exports = {
  getDataForId,
  generateDataForRestaurants
};