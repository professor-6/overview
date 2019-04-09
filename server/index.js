const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const port = process.env.PORT || 3003;
// const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// dynamic endpoint -> /api/restaurants/14 renders data for restaurant 14.
app.get(`/:id`, (req, res) => {
  let id = req.params.id;
  db.getDataForId(id, (err, results) => {
    if (err) {
      console.log('error getting data in server', err);
    }
    res.json(results);
  })
});


// ---- working on getting the endpoint to work ----

// app.get('/:id', function(req, res) {
//   const reactPath = path.join(__dirname, '/../client/dist/index.html');
//   res.sendFile(reactPath);
// });


// renders data for all 100 restaurants
app.get('/restaurants', (req, res) => {
  db.getAllRestaurants((err, results) => {
    if (err) {
      console.log('server error getting all data', err);
    }
    res.json(results);
  });
});

// sends all photos from db to this endpoint
app.get(`/photos`, (req, res) => {
  db.getAllPhotos( (err, results) => {
    if (err) {
      console.log('server error getting all photos', err);
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});