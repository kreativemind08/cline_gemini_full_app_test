const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Metric = require('./metric')(sequelize, Sequelize.DataTypes);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Metric = Metric;

module.exports = db;
