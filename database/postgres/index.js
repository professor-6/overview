const Sequelize = require('sequelize');
const sequelize = new Sequelize('open_table', 'postgres', 'hrr37', {
  host: 'localhost',
  dialect: 'postgres'
});

let Review = sequelize.define(`open_table_reviews`, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.DECIMAL
  },
  reviews: {
    type: Sequelize.DECIMAL
  },
  max_price: {
    type: Sequelize.DECIMAL
  },
  food_type: {
    type: Sequelize.STRING
  },
  tag1: {
    type: Sequelize.STRING
  },
  tag2: {
    type: Sequelize.STRING
  },
  tag3: {
    type: Sequelize.STRING
  },
  isdeleted: {
    type: Sequelize.BOOLEAN
  }
});

exports.getDataForId = (id, callback) => {
  let queryString = `SELECT * FROM open_table_reviews WHERE id = ${id}`;
  sequelize.query(queryString, {type: sequelize.QueryTypes.SELECT})
  .then(record => {callback(record)});
}

exports.deleteById = (id, callback) => {
  let queryString = `UPDATE open_table_reviews SET isdeleted = true WHERE id = ${id}`;
  sequelize.query(queryString)
  .then(() => {
    exports.getDataForId(id, callback);
  })
}