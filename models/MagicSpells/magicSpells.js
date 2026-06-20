const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const magicSpells = connection.define("magicSpells", {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  nivel: {
    type: Sequelize.STRING,
    allowNull: false
  },

  school: {
    type: Sequelize.STRING,
    allowNull: false
  },

  timeConjuration: {
    type: Sequelize.STRING,
    allowNull: false
  },

  alcance: {
    type: Sequelize.STRING,
    allowNull: false
  },

  componentes: {
    type: Sequelize.STRING,
    allowNull: false
  },

  duration: {
    type: Sequelize.STRING,
    allowNull: false
  },

  ritual: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  bard: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  wizard: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  cleric: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  druid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  sorcerer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  mage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  paladin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  ranger: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  
  

});

module.exports = magicSpells;