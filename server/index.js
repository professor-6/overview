const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/postgres/index.js');
const port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
const staticPath = `${__dirname}/../client/dist`;
app.use('/restaurants/:id', express.static(staticPath));

app.get('/favicon.ico', (req, res) => res.status(204));

// dynamic endpoint -> /api/restaurants/14 renders data for restaurant 14.
app.get(`/:id`, (req, res) => {
  let id = req.params.id;
  db.getDataForId(id, (results) => {
    console.log(id, results)
    res.send(results);
  });
});

app.post(`/:id`, (req, res) => {
  db.addRecord(req.body, (results)=> {
    res.send(results);
  })
});

app.put(`/:id`, (req, res) => {
    let id = req.params.id;
    db.updateById(id, req.body, (results) => {
      res.send(results);
    })
});

app.delete(`/:id`, (req, res) => {
  let id = req.params.id;
  db.deleteById(id, (results) => {
    res.send(results);
  })
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

//===========LEGACY CODE=====================
// const db = require('../database/index.js');
// // redirect user to restaurant 1 from homepage
// app.get('/', (req, res) => {
  //   res.redirect(`/1`);
  // });

  // gets data for id endpoint
  // app.get(`/:id`, (req, res) => {
    //   res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
    // })
//===================================================
//==============LEGACY CODE=================//
//**********ORIGINAL app.get(`\:id`) FUNC */
// db.getDataForId(id, (err, results) => {
  //   if (err) {
    //     console.log('error getting data in server', err);
  //   }
//   res.send(results);
// })
//======================================//
