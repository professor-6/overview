const db = require('./index.js');

// all data for restaurants table
const data = {
  tags: ['healthy', 'fun', 'scenic', 'romantic', 'good for dates', 'special occasion', 'good for business', 'casual', 'fancy', 'local ingredients', 'organic', 'friendly staff', 'tasty', 'fit for foodies', 'creative cuisine'],
  foodTypes: ['American', 'Mexican', 'Asian', 'Thai', 'Chinese', 'Japanese', 'Liberian', 'Ethiopian', 'Southwest', 'Comfort Food', 'Steakhouse', 'Diner', 'Kenyan', 'Brazilian', 'Brunch', 'Argentinian', 'Burgers', 'Hawaiian', 'Alaskan', 'Russian', 'Turkish', 'Breakfast', 'Coffee'],
  descriptions: ['Great food with an upscale twist. We have friendly staff, a diverse menu, and food that will keep you coming back for more. Open seven days a week, you can come for breakfast, lunch or dinner. We also accept reservations. Fun for the whole family!', "Located in the heart of downtown Los Angeles, we have been rated one of the top 5 restaurants in town! Whether you have lived here your whole life, or you are just visiting for the weekend, you can't go wrong here. Open 24 hours, we accept reservations until 10pm. Come say hi!", "Look no further for the best food in town! Our 5 star chef has curated our menu based on local foods, and she is always cooking with what's in season. One of our many great reviews: 'Let us just say if you're in town and want to wow your tastebuds, go here. It is inspired and inspiring.' (Jane & Michael Stern, NPR)", "If you’re craving a great meal, we have a variety of savory appetizers and entrees to chose from. We also boast an extensive wine list and craft beer to pair with anything you choose, and we offer delicious desserts to top off your evening. Whether you sit in our main dining room, the bar or our private dining room, this is a great place to entertain friends or family in an inviting setting. Step into our kitchen and let us share our passion for food!", "Built in 1847, the pristine four-acre estate and beautiful mansion welcomes you before you reach the driveway. Whether you dine in one of the mansion’s eight dining rooms decorated in traditional Spanish décor, attend a wedding or corporate event in the pavilion, or sit out back on the patio, our cuisine and delicious drinks make for an unparalleled dining experience. For a quiet, romantic dining experience we recommend a week night reservation.The small mansion rooms fill up on the weekends, making for a more lively dining experience.", "We opened in 2010 with the goal of serving a family style menu of tasty, bold flavored foods in a fun and lively setting. To enhance the experience we offer a selection of wines from around the world with a focus on small producers, a rotating list of craft beers, and a list of fun cocktails created by our bartenders.", "Welcome! Our restaurant was built in 1948, and has been a popular hang out spot ever since. We offer large areas of (dog friendly!) patio seating, a long list of craft beers, and staff who will love to get to know you. We can't wait for you to drop by."],
  names: ['Pollich LLC', 'Reichel - Kuhn and Jones', 'Wuckert - Jast and Paucek', 'Kris - Connelly', 'Jacobs - Heaney', 'Rempel - Hand', 'Frami - Beier', 'Hyatt - Medhurst and Rippin', 'Deckow - Kessler', 'Boehm LLC', 'Lemke - Kautzer and Nader', 'Stanton and Sons', 'Ritchie - Monahan and Hermiston', "Johns - Hand and O'Keefe", "Hintz - Farrell", "Greenholt Group", "Runolfsson - Bosco", "Kemmer - Barrows and Keeling", "Kunde Inc", "Blick - Hahn", "Kautzer - Rohan and Trantow", "Welch - Langosh and Kutch", "Mueller - Mante", "Gutkowski and Sons", "Jerde - Parker", "Von - Friesen and Brekke", "Kunde - Yost", "Leannon and Sons", "Rolfson - Cartwright", "Shanahan - Schmeler", "Grady - Little", "Heaney - Altenwerth", "Hayes and Sons", "Parisian - Strosin and Swift", "Lang and Sons", "Gleichner - McDermott and Smith", "Glover - Pacocha", "Spinka - Dare", "Haley Group", "Flatley - Davis and Dietrich", "Marquardt - Effertz", "Leannon Group", "Murazik Group", "Ziemann - Armstrong and Kreiger", "Hackett - Luettgen", "Cronin - Goyette", "Runolfsdottir LLC", "Hamill LLC", "Vandervort - Lueilwitz and Emmerich", "Hettinger - Walsh", "Spencer - Rath and Hermiston", "Baumbach - Fay", "Hoeger and Sons", "Purdy - Luettgen", "Abernathy - Hermann and Nienow", "Beer - Medhurst and Baumbach", "Swift - Corwin and Greenfelder", "Ruecker - Fisher", "Heaney - Swift", "Barrows - O'Reilly", "Breitenberg - Ferry", "Torp and Sons", "Olson - Dickinson", "Greenholt - Lueilwitz and Schumm", "Macejkovic - Hoppe and Pagac", "Schowalter and Sons", "D'Amore - Johnson and Shields", "Hauck and Sons", "Lebsack - Mayert", "Lebsack - Hackett", "Waelchi Group", "Ullrich - Heidenreich", "Lindgren and Sons", "Leannon - Goyette", "Grimes - Wyman and Maggio", "Rau LLC", "Schoen - Heller", "Murray - Renner", "Crooks - Cummings and Miller", "Streich - Heidenreich and Wyman", "Block - Bergstrom and Keebler", "Doyle Group", "Vandervort - Lockman", "Botsford Inc", "Schumm Group", "Mante Inc", "Bernhard - Romaguera", "Robel - Lang", "Johns LLC", "Smitham and Sons", "Schoen Group", "Graham - Pfannerstill and Haag", "O'Reilly - Jakubowski and Brown", "O'Reilly and Sons", "Kuvalis - Predovic and Jacobson", "Davis - Kertzmann", "Runolfsdottir LLC", "Gleason - Bogan", "McCullough - McCullough and Schultz", "Harvey - D'Amore"],
  images: {
    1: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-1.jpg' },
    2: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-11.jpg' },
    3: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-12.jpg' },
    4: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-13.jpg' },
    5: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-14.jpg' },
    6: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-15.jpg' },
    7: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-16.jpg' },
    8: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-17.jpg' },
    9: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-18.jpg' },
    10: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-9.jpg' },
    11: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-10.jpg' },
    12: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-22.jpg' },
    13: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-23.jpg' },
    14: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-24.jpg' },
    15: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-25.jpg' },
    16: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-26.jpg' },
    17: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-27.jpg' },
    18: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-28.jpg' },
    19: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-29.jpg' },
    20: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-30.jpg' },
    21: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-31.jpg' },
    22: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-32.jpg' },
    23: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-33.jpg' },
    24: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-34.jpg' },
    25: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-35.jpg' },
    26: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-36.jpg' },
    27: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-37.jpg' },
    28: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-38.jpg' },
    29: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-39.jpg' },
    30: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-40.jpg' },
    31: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-41.jpg' },
    32: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-42.jpg' },
    33: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-43.jpg' },
    34: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-44.jpg' },
    35: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-45.jpg' },
    36: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-46.jpg' },
    37: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-47.jpg' },
    38: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-48.jpg' },
    39: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-49.jpg' },
    40: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-50.jpg' },
    41: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-51.jpg' },
    42: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-52.jpg' },
    43: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-53.jpg' },
    44: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-54.jpg' },
    45: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-55.jpg' },
    46: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-56.jpg' },
    47: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-57.jpg' },
    48: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-58.jpg' },
    49: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-59.jpg' },
    50: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-60.jpg' },
    51: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-61.jpg' },
    52: { src: 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/images-62.jpg' },
  }
};

// functions to generate random data
const getData = {
  getTag3: () => {
    let min = Math.ceil(11);
    let max = Math.floor(15);
    let random = Math.floor(Math.random() * (max - min)) + min;
    let tag = data.tags[random];
    return tag;
  },
  getTag2: () => {
    let min = Math.ceil(6);
    let max = Math.floor(11);
    let random = Math.floor(Math.random() * (max - min)) + min;
    let tag = data.tags[random];
    return tag;
  },
  getTag1: () => {
    let min = Math.ceil(0);
    let max = Math.floor(6);
    let random = Math.floor(Math.random() * (max - min)) + min;
    let tag = data.tags[random];
    return tag;
  },
  getMaxPrice: () => {
    let min = Math.ceil(10);
    let max = Math.floor(150);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getReviews: () => {
    let min = Math.ceil(0);
    let max = Math.floor(2000);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRating: () => {
    return (Math.random() * (5 - 2) + 2).toFixed(1);
  },
  getFoodType: () => {
    let random = Math.floor(Math.random() * Math.floor(12));
    let foodType = data.foodTypes[random];
    return foodType;
  },
  getDescription: () => {
    let random = Math.floor(Math.random() * Math.floor(7));
    let description = data.descriptions[random];
    return description;
  },
  getPhotos: () => {
    let photos = [];
    let num = Math.floor(Math.random() * Math.floor(51));
    for (var i = 0; i < 10; i++) {
      photos.push(data.images[num]);
    }
    return photos;
  }
};

// adds 100 rows of data to restaurants table
for (var i = 0; i < 100; i++) {
  db.generateDataForRestaurants(i+1, data.names[i], getData.getDescription(), getData.getRating(), getData.getReviews(), getData.getMaxPrice(), getData.getFoodType(), getData.getTag1(), getData.getTag2(), getData.getTag3(), (error, results) => {
    if (error) {
      console.log('error generating data (data.js)', error);
    } else {
      console.log('Successfully seeded db');
    }
  });
};

//add photos to each restaurant in photos table
for (var i = 0; i < 100; i++) {
  db.generateDataForPhotos(getData.getPhotos(), (error, results) => {
    if (error) {
      console.log('error generating photos (data.js)', error);
    } else {
      console.log('Successfully added photos to db');
    }
  });
};
