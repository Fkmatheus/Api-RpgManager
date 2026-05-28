const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const art_7500 = connection.define("art7500", {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  dice: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },

});

module.exports = art_7500;