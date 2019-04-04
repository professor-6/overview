const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// dynamic endpoint -> /api/restaurants/14 renders data for restaurant 14.
app.get(`/api/restaurants/:id`, (req, res) => {
  let id = req.params.id;
  db.getDataForId(id, (err, results) => {
    if (err) {
      console.log('error getting data in server', err);
    }
    res.json(results);
  })
});

// renders data for all 100 restaurants
app.get('/api/restaurants', (req, res) => {
  db.getAllRestaurants((err, results) => {
    if (err) {
      console.log('server error getting all data', err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});