const fs = require('fs');
const csvWriter = require('csv-write-stream');

const { data, getData } = require ('../data.js');
const {getDescription, getRating, getReviews, getMaxPrice, getFoodType, getTag1, getTag2, getTag3} = getData;

const randomId = () => {return Math.floor(Math.random() * 100)};

const generate1000Records = () => {
  let records = [];
  for (let i = 0; i < 1000; i++) {
    let record = {};

    record.name = data.names[randomId()];
    record.description = getDescription();
    record.rating = getRating();
    record.reviews = getReviews();
    record.maxPrice = getMaxPrice();
    record.foodType = getFoodType();
    record.tag1 = getTag1();
    record.tag2 = getTag2();
    record.tag3 = getTag3();
    record.isDeleted = false;

    records.push(record);
  }
  return records;
}

const writeOneMill = () => {
  console.log(`You've hit Promise # ${count}`);

  return new Promise ((res, rej) => {
    let writer = csvWriter();
    writer.on('error', (err) => {rej(err);});
    writer.on('end', () => res(generate1000Records()));
    writer.pipe(fs.createWriteStream(`record-${count}.csv`));

    for (let i = 0; i < 1000; i++) {
      generate1000Records().forEach((record) => {
        writer.write(record);
      });
    }

    writer.end();
    count++;
  })
}

let count = 1;
const writeTenMill = () => {
  writeOneMill()
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
  .then (writeOneMill)
}

writeTenMill();