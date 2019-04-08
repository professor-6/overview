const db = require('./index.js');

// all data for restaurants table
const data = {
  tags: ['healthy', 'fun', 'scenic', 'romantic', 'good for dates', 'special occasion', 'good for business', 'casual', 'fancy', 'local ingredients', 'organic', 'friendly staff', 'tasty', 'fit for foodies', 'creative cuisine'],
  foodTypes: ['American', 'Mexican', 'Asian', 'Thai', 'Chinese', 'Japanese', 'Liberian', 'Ethiopian', 'Southwest', 'Comfort Food', 'Steakhouse', 'Diner', 'Kenyan', 'Brazilian', 'Brunch', 'Argentinian', 'Burgers', 'Hawaiian', 'Alaskan', 'Russian', 'Turkish', 'Breakfast', 'Coffee'],
  description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in dapibus sapien. Nulla sodales quam at nunc pulvinar scelerisque. Proin quis tristique tortor. Vivamus ac dui justo. Phasellus ac arcu eleifend, molestie tellus ac, molestie sapien. Phasellus eleifend, purus id commodo mattis, nibh dolor commodo libero, quis consequat quam massa ut enim. Suspendisse potenti. Nulla facilisi.', 'Great food with an upscale twist. We have friendly staff, a diverse menu, and food that will keep you coming back for more. Open seven days a week, you can come for breakfast, lunch or dinner. We also accept reservations. Fun for the whole family!', ''],
  names: ['Pollich LLC', 'Reichel - Kuhn and Jones', 'Wuckert - Jast and Paucek', 'Kris - Connelly', 'Jacobs - Heaney', 'Rempel - Hand', 'Frami - Beier', 'Hyatt - Medhurst and Rippin', 'Deckow - Kessler', 'Boehm LLC', 'Lemke - Kautzer and Nader', 'Stanton and Sons', 'Ritchie - Monahan and Hermiston', "Johns - Hand and O'Keefe", "Hintz - Farrell", "Greenholt Group", "Runolfsson - Bosco", "Kemmer - Barrows and Keeling", "Kunde Inc", "Blick - Hahn", "Kautzer - Rohan and Trantow", "Welch - Langosh and Kutch", "Mueller - Mante", "Gutkowski and Sons", "Jerde - Parker", "Von - Friesen and Brekke", "Kunde - Yost", "Leannon and Sons", "Rolfson - Cartwright", "Shanahan - Schmeler", "Grady - Little", "Heaney - Altenwerth", "Hayes and Sons", "Parisian - Strosin and Swift", "Lang and Sons", "Gleichner - McDermott and Smith", "Glover - Pacocha", "Spinka - Dare", "Haley Group", "Flatley - Davis and Dietrich", "Marquardt - Effertz", "Leannon Group", "Murazik Group", "Ziemann - Armstrong and Kreiger", "Hackett - Luettgen", "Cronin - Goyette", "Runolfsdottir LLC", "Hamill LLC", "Vandervort - Lueilwitz and Emmerich", "Hettinger - Walsh", "Spencer - Rath and Hermiston", "Baumbach - Fay", "Hoeger and Sons", "Purdy - Luettgen", "Abernathy - Hermann and Nienow", "Beer - Medhurst and Baumbach", "Swift - Corwin and Greenfelder", "Ruecker - Fisher", "Heaney - Swift", "Barrows - O'Reilly", "Breitenberg - Ferry", "Torp and Sons", "Olson - Dickinson", "Greenholt - Lueilwitz and Schumm", "Macejkovic - Hoppe and Pagac", "Schowalter and Sons", "D'Amore - Johnson and Shields", "Hauck and Sons", "Lebsack - Mayert", "Lebsack - Hackett", "Waelchi Group", "Ullrich - Heidenreich", "Lindgren and Sons", "Leannon - Goyette", "Grimes - Wyman and Maggio", "Rau LLC", "Schoen - Heller", "Murray - Renner", "Crooks - Cummings and Miller", "Streich - Heidenreich and Wyman", "Block - Bergstrom and Keebler", "Doyle Group", "Vandervort - Lockman", "Botsford Inc", "Schumm Group", "Mante Inc", "Bernhard - Romaguera", "Robel - Lang", "Johns LLC", "Smitham and Sons", "Schoen Group", "Graham - Pfannerstill and Haag", "O'Reilly - Jakubowski and Brown", "O'Reilly and Sons", "Kuvalis - Predovic and Jacobson", "Davis - Kertzmann", "Runolfsdottir LLC", "Gleason - Bogan", "McCullough - McCullough and Schultz", "Harvey - D'Amore"]
};

//food photo URLS for photo gallery / photos table
const photoData = {urls: ['https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-1.jpg','https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-11.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-12.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-13.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-14.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-15.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-16.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-17.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-18.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-19.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-2.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-20.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-21.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-3.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-4.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-5.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-6.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-7.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-8.jpg', 'https://s3.amazonaws.com/open-table-fec/FEC+PICS/download-9.jpg']};


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
  getPhotos: () => {
    let photos = [];
    for (var i = 0; i < 10; i++) {
      photos.push(photoData.urls[Math.floor(Math.random() * Math.floor(12))]);
    }
    return photos;
  }
};

// adds 100 rows of data to restaurants table
for (var i = 0; i < 100; i++) {
  db.generateDataForRestaurants(i+1, data.names[i], data.description, getData.getRating(), getData.getReviews(), getData.getMaxPrice(), getData.getFoodType(), getData.getTag1(), getData.getTag2(), getData.getTag3(), (error, results) => {
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
