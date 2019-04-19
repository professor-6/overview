const { data, getData } = require ('./data.js');

const {getDescription, getRating, getReviews, getMaxPrice, getFoodType, getTag1, getTag2, getTag3} = getData;

let counter = 0;
let records = [];

const generate1000Records = (start, stop) => {
  start = start || 0;
  stop = stop || 1000;
  for (let i = start; i < stop; i++) {
    let record = {};

    record.name = data.names[i];
    record.description = getDescription();
    record.rating = getRating();
    record.reviews = getReviews();
    record.maxPrice = getMaxPrice();
    record.foodType = getFoodType();
    record.tag1 = getTag1();
    record.tag2 = getTag2();
    record.tag3 = getTag3();
    record.id = i;

    records.push(record);
  }
  counter++;
  console.log(records.length)
}



const generateOneMill = () => {
  for (let j = 0; j < 1000; j++) {
    setTimeout(generate1000Records, 0);
  }
}

const generate9Mill = (cb) => {
  for (let k = 0; k < 9; k++) {
    setTimeout(cb, 10);
  }
}

const breakFunc = () => {
  console.log(records.length);
  setTimeout(()=>{console.log('hello')}, 0)
}

generate9Mill(generateOneMill);


// data.names[i], getData.getDescription(), getData.getRating(), getData.getReviews(), getData.getMaxPrice(), getData.getFoodType(), getData.getTag1(), getData.getTag2(), getData.getTag3()