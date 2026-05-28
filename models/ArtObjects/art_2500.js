const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const art_2500 = connection.define("art2500", {

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

module.exports = art_2500;