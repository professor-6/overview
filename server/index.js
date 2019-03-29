const express = require('express');
const app = express();
const data = require('../database/data.js')
const port = 3000;

app.get('/', (req, res) => {
  res.send('AAYYYYYYYY!');
});

console.log(data.reviews())

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});