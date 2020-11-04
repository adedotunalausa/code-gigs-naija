const { Sequelize } = require('sequelize');

// Connecting to the database
module.exports = new Sequelize(
  'codegigDB',
  'root',
  'itiswell',
  {
    host: 'localhost',
    dialect: 'mysql'
  });