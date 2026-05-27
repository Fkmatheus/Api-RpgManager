const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const gems_10 = connection.define("gems10", {
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
});

module.exports = gems_10;