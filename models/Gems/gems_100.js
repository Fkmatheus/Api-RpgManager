const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const gems_100 = connection.define("gems100", {

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

module.exports = gems_100;