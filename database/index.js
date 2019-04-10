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

// returns all photos from db
const getAllPhotos = (callback) => {
  connection.query('SELECT * FROM photos', (error, results) => {
    if (error) {
      console.log('server error getting photos', error);
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

// SQL query to seed photos table: called in data.js
const generateDataForPhotos = (photos, callback) => {
  connection.query(`INSERT INTO photos VALUES (?)`, [photos], (error, results) => {
    if (error) {
      console.log('error adding photos to db', error);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllPhotos,
  getDataForId,
  generateDataForRestaurants,
  generateDataForPhotos
};