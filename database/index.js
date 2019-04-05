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
const generateDataForPhotos = (photo_id, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, callback) => {
  connection.query(`INSERT INTO photos VALUES (?,?,?,?,?,?,?,?,?,?,?)`, [photo_id, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10], (error, results) => {
    if (error) {
      console.log('error adding photos to db', error);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllPhotos,
  getDataForId,
  getAllRestaurants,
  generateDataForRestaurants,
  generateDataForPhotos
};