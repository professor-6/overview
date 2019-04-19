const { data, getData } = require ('../data.js');
const fs = require('fs');

const {getDescription, getRating, getReviews, getMaxPrice, getFoodType, getTag1, getTag2, getTag3} = getData;

let counter = 0;

const generate1000Records = (start, stop) => {
  let records = [];
  start = start || 0;
  stop = stop || 1000;
  for (let i = start; i < stop; i++) {
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
  for (let j = 0; j < 100; j++) {
    oneMill = oneMill.concat(generate1000Records())
  }
  return oneMill;
}

const writeTenMill = () => {
  for (let i = 0; i < 100; i++) {
    fs.writeFile(`records${i}.json`, JSON.stringify(generateOneMill()), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('nice job buddy');
    })
  }
}

writeTenMill();


// data.names[i], getData.getDescription(), getData.getRating(), getData.getReviews(), getData.getMaxPrice(), getData.getFoodType(), getData.getTag1(), getData.getTag2(), getData.getTag3()