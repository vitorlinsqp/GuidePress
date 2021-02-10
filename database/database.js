const Sequelize = require("sequelize");

const connection = new Sequelize("guidepress", "root", "ventura", {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;