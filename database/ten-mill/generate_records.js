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

    records.push(record);
  }
  return records;
}

const generateOneMill = () => {
  let oneMill = [];
  for (let j = 0; j < 1000; j++) {
    oneMill = oneMill.concat(generate1000Records());
  }
  return oneMill;
}

//==========writeOneMill in JSON=================
// const writeOneMill = () => {
//   console.log(`You've hit Promise #${count}`)
//   return new Promise ((res, rej) => {
//     fs.writeFile(`records${count}.json`, generateOneMill(), (err) => {
//       if (err) {
//         rej(err);
//       } else {
//         count++;
//         res(generateOneMill());
//       }
//     })
//   })
// }
//=================writeOneMill in CSV================
const writeOneMill = () => {
  console.log(`You've hit Promise # ${count}`);

  return new Promise ((res, rej) => {
    let writer = csvWriter();
    // let oneMill = generateOneMill();
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
    console.log('nice jobbo');
  })
}

// =====writeTenMill with Promises===========
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

//=======writeTenMill Iteratively===========
// const writeTenMill = () => {
//   for (let i = 0; i < 10; i++) {
//     writer.pipe(fs.createWriteStream(`record-${i}.csv`));
//     generateOneMill().forEach((record) => {
//       writer.write(record);
//     });
//     writer.end();
//   }
// }

// writeTenMill();

console.log(data.names.length, data.names);
// writeOneMill();

// =========CSV: write a single record===========
// writer.write({
  //   id: i,
  //   name: data.names[i],
  //   description: getDescription(),
  //   rating: getRating(),
  //   reviews: getReviews(),
  //   maxPrice: getMaxPrice(),
  //   foodType: getFoodType(),
  //   tag1: getTag1(),
  //   tag2: getTag2(),
  //   tag3: getTag3()
  // })