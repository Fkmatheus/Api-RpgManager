const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const magic_I = connection.define("magicI", {

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

module.exports = magic_I;