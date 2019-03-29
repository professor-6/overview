const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;
const data = require('./database/data.js')
mongoose.connect('mongodb://localhost/open-table');

  const restaurants = new Schema({
    id: Number,
    name: String,
    description: String,
    rating: Number,
    reviews: Number,
    max_price: Number,
    food_type: String,
    tag1: String,
    tag2: String,
    tag3: String
  });

  restaurants.insert(data, function(err, records){
    if (err) {
      console.log('error inserting data to db')
    }
    console.log("Record added as "+records[0]._id);
  });


  var Restaurant = mongoose.model('test', restaurants);

  let save = (restaurant) => {
    let newRestaurant = new Restaurant({
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      rating: restaurant.rating,
      reviews: restaurant.reviews,
      max_price: restaurant.maxPrice,
      food_type: restaurant.foodType,
      tag1: restaurant.tag1,
      tag2: restaurant.tag2,
      tag3: restaurant.tag3
    })
    newRestaurant.save((error) => {
      if (error) {
        console.log('error saving to db', error);
      }
    });
    console.log('saved to db');
  };

save(data);


// id, name
// 1, Pollich LLC
// 2, Reichel - Kuhn and Jones
// 3, Wuckert - Jast and Paucek
// 4, Kris - Connelly
// 5, Jacobs - Heaney
// 6, Rempel - Hand
// 7, Frami - Beier
// 8, Hyatt - Medhurst and Rippin
// 9, Deckow - Kessler
// 10, Boehm LLC
// 11, Lemke - Kautzer and Nader
// 12, Stanton and Sons
// 13, Ritchie - Monahan and Hermiston
// 14, Johns - Hand and O'Keefe
// 15, Hintz - Farrell
// 16, Greenholt Group
// 17, Runolfsson - Bosco
// 18, Kemmer - Barrows and Keeling
// 19, Kunde Inc
// 20, Blick - Hahn
// 21, Kautzer - Rohan and Trantow
// 22, Welch - Langosh and Kutch
// 23, Mueller - Mante
// 24, Gutkowski and Sons
// 25, Jerde - Parker
// 26, Von - Friesen and Brekke
// 27, Kunde - Yost
// 28, Leannon and Sons
// 29, Rolfson - Cartwright
// 30, Shanahan - Schmeler
// 31, Grady - Little
// 32, Heaney - Altenwerth
// 33, Hayes and Sons
// 34, Parisian - Strosin and Swift
// 35, Lang and Sons
// 36, Gleichner - McDermott and Smith
// 37, Glover - Pacocha
// 38, Spinka - Dare
// 39, Haley Group
// 40, Flatley - Davis and Dietrich
// 41, Marquardt - Effertz
// 42, Leannon Group
// 43, Murazik Group
// 44, Ziemann - Armstrong and Kreiger
// 45, Hackett - Luettgen
// 46, Cronin - Goyette
// 47, Runolfsdottir LLC
// 48, Hamill LLC
// 49, Vandervort - Lueilwitz and Emmerich
// 50, Hettinger - Walsh
// 51, Spencer - Rath and Hermiston
// 52, Baumbach - Fay
// 53, Hoeger and Sons
// 54, Purdy - Luettgen
// 55, Abernathy - Hermann and Nienow
// 56, Beer - Medhurst and Baumbach
// 57, Swift - Corwin and Greenfelder
// 58, Ruecker - Fisher
// 59, Heaney - Swift
// 60, Barrows - O'Reilly
// 61, Breitenberg - Ferry
// 62, Torp and Sons
// 63, Olson - Dickinson
// 64, Greenholt - Lueilwitz and Schumm
// 65, Macejkovic - Hoppe and Pagac
// 66, Schowalter and Sons
// 67, D'Amore - Johnson and Shields
// 68, Hauck and Sons
// 69, Lebsack - Mayert
// 70, Lebsack - Hackett
// 71, Waelchi Group
// 72, Ullrich - Heidenreich
// 73, Lindgren and Sons
// 74, Leannon - Goyette
// 75, Grimes - Wyman and Maggio
// 76, Rau LLC
// 77, Schoen - Heller
// 78, Murray - Renner
// 79, Crooks - Cummings and Miller
// 80, Streich - Heidenreich and Wyman
// 81, Block - Bergstrom and Keebler
// 82, Doyle Group
// 83, Vandervort - Lockman
// 84, Botsford Inc
// 85, Schumm Group
// 86, Mante Inc
// 87, Bernhard - Romaguera
// 88, Robel - Lang
// 89, Johns LLC
// 90, Smitham and Sons
// 91, Schoen Group
// 92, Graham - Pfannerstill and Haag
// 93, O'Reilly - Jakubowski and Brown
// 94, O'Reilly and Sons
// 95, Kuvalis - Predovic and Jacobson
// 96, Davis - Kertzmann
// 97, Runolfsdottir LLC
// 98, Gleason - Bogan
// 99, McCullough - McCullough and Schultz
// 100, Harvey - D'Amore
