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