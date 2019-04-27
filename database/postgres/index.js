const Sequelize = require('sequelize');
const sequelize = new Sequelize('open_table', 'postgres', 'hrr37', {
  host: 'localhost',
  dialect: 'postgres'
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

exports.addRecord = (record, callback) => {
  const {name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isdeleted} = record;
  let queryString = `INSERT INTO open_table_reviews (name, description, rating, reviews, max_price, food_type, tag1, tag2, tag3, isDeleted) VALUES ('${name}', '${description}', ${rating}, ${reviews}, ${max_price}, '${food_type}', '${tag1}', '${tag2}', '${tag3}', ${isdeleted})`;
  sequelize.query(queryString)
  .then((results) => callback(results));
}