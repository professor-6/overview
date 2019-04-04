const db = require('./index.js');

const data = {
  tags: ['healthy', 'fun', 'scenic', 'romantic', 'good for dates', 'special occasion', 'good for business', 'casual', 'fancy', 'local ingredients', 'organic', 'friendly staff', 'tasty', 'fit for foodies', 'creative cuisine'],
  foodTypes: ['American', 'Mexican', 'Asian', 'Thai', 'Chinese', 'Japanese', 'Liberian', 'Ethiopian', 'Southwest', 'Comfort Food', 'Steakhouse', 'Diner', 'Kenyan', 'Brazilian', 'Phillipino', 'Argentinian', 'Healthy', 'Hawaiian', 'Alaskan', 'Russian', 'Turkish', 'Breakfast', 'Café'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in dapibus sapien. Nulla sodales quam at nunc pulvinar scelerisque. Proin quis tristique tortor. Vivamus ac dui justo. Phasellus ac arcu eleifend, molestie tellus ac, molestie sapien. Phasellus eleifend, purus id commodo mattis, nibh dolor commodo libero, quis consequat quam massa ut enim. Suspendisse potenti. Nulla facilisi.',
  names: ['Pollich LLC', 'Reichel - Kuhn and Jones', 'Wuckert - Jast and Paucek', 'Kris - Connelly', 'Jacobs - Heaney', 'Rempel - Hand', 'Frami - Beier', 'Hyatt - Medhurst and Rippin', 'Deckow - Kessler', 'Boehm LLC', 'Lemke - Kautzer and Nader', 'Stanton and Sons', 'Ritchie - Monahan and Hermiston', "Johns - Hand and O'Keefe", "Hintz - Farrell", "Greenholt Group", "Runolfsson - Bosco", "Kemmer - Barrows and Keeling", "Kunde Inc", "Blick - Hahn", "Kautzer - Rohan and Trantow", "Welch - Langosh and Kutch", "Mueller - Mante", "Gutkowski and Sons", "Jerde - Parker", "Von - Friesen and Brekke", "Kunde - Yost", "Leannon and Sons", "Rolfson - Cartwright", "Shanahan - Schmeler", "Grady - Little", "Heaney - Altenwerth", "Hayes and Sons", "Parisian - Strosin and Swift", "Lang and Sons", "Gleichner - McDermott and Smith", "Glover - Pacocha", "Spinka - Dare", "Haley Group", "Flatley - Davis and Dietrich", "Marquardt - Effertz", "Leannon Group", "Murazik Group", "Ziemann - Armstrong and Kreiger", "Hackett - Luettgen", "Cronin - Goyette", "Runolfsdottir LLC", "Hamill LLC", "Vandervort - Lueilwitz and Emmerich", "Hettinger - Walsh", "Spencer - Rath and Hermiston", "Baumbach - Fay", "Hoeger and Sons", "Purdy - Luettgen", "Abernathy - Hermann and Nienow", "Beer - Medhurst and Baumbach", "Swift - Corwin and Greenfelder", "Ruecker - Fisher", "Heaney - Swift", "Barrows - O'Reilly", "Breitenberg - Ferry", "Torp and Sons", "Olson - Dickinson", "Greenholt - Lueilwitz and Schumm", "Macejkovic - Hoppe and Pagac", "Schowalter and Sons", "D'Amore - Johnson and Shields", "Hauck and Sons", "Lebsack - Mayert", "Lebsack - Hackett", "Waelchi Group", "Ullrich - Heidenreich", "Lindgren and Sons", "Leannon - Goyette", "Grimes - Wyman and Maggio", "Rau LLC", "Schoen - Heller", "Murray - Renner", "Crooks - Cummings and Miller", "Streich - Heidenreich and Wyman", "Block - Bergstrom and Keebler", "Doyle Group", "Vandervort - Lockman", "Botsford Inc", "Schumm Group", "Mante Inc", "Bernhard - Romaguera", "Robel - Lang", "Johns LLC", "Smitham and Sons", "Schoen Group", "Graham - Pfannerstill and Haag", "O'Reilly - Jakubowski and Brown", "O'Reilly and Sons", "Kuvalis - Predovic and Jacobson", "Davis - Kertzmann", "Runolfsdottir LLC", "Gleason - Bogan", "McCullough - McCullough and Schultz", "Harvey - D'Amore"]
};

const getData = {
  getTag3: () => {
    let random = Math.floor(Math.random() * Math.floor(15));
    let tag3 = data.tags[random];
    return tag3;
  },
  getTag2: () => {
    let min = Math.ceil(0);
    let max = Math.floor(2000);
    return Math.floor(Math.random() * (max - min)) + min;
    let tag2 = data.tags[random];
    return tag2;
  },
  getTag1: () => {
    let random = Math.floor(Math.random() * Math.floor(5));
    let tag1 = data.tags[random];
    return tag1;
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
    let random = Math.floor(Math.random() * Math.floor(23));
    let foodType = data.foodTypes[random];
    return foodType;
  }
};

// adds 100 rows of data to restaurants table
for (var i = 0; i < 100; i++) {
  db.generateData(i+1, data.names[i], data.description, getData.getRating(), getData.getReviews(), getData.getMaxPrice(), getData.getFoodType(), getData.getTag1(), getData.getTag2(), getData.getTag3(), (error, results) => {
    if (error) {
      console.log('error generating data (data.js)', error);
    } else {
      console.log('Successfully seeded db');
    }
  });
};
