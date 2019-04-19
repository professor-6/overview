const { data, getData } = require ('../data.js');
const fs = require('fs');
const {getDescription, getRating, getReviews, getMaxPrice, getFoodType, getTag1, getTag2, getTag3} = getData;

const generate1000Records = () => {
  let records = [];
  for (let i = 0; i < 1000; i++) {
    let record = {};

    record.id = i;
    record.name = data.names[i];
    record.description = getDescription();
    record.rating = getRating();
    record.reviews = getReviews();
    record.maxPrice = getMaxPrice();
    record.foodType = getFoodType();
    record.tag1 = getTag1();
    record.tag2 = getTag2();
    record.tag3 = getTag3();

    records.push(record);
  }
  return records;
}

const generateOneMill = () => {
  let oneMill = [];
  for (let j = 0; j < 1000; j++) {
    oneMill = oneMill.concat(generate1000Records());
  }
  return JSON.stringify(oneMill);
}


const writeOneMill = () => {
  console.log(`You've hit Promise #${count}`)
  return new Promise ((res, rej) => {
    fs.writeFile(`records${count}.json`, generateOneMill(), (err) => {
      if (err) {
        rej(err);
      } else {
        count++;
        res(generateOneMill())
      }
    })
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