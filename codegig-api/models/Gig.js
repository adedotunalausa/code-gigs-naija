const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Gig = db.define('Gig', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  technologies: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
})

module.exports = Gig