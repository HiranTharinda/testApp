const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.posts = require("./Post.js")(sequelize, Sequelize);
database.comments = require("./Comment.js")(sequelize, Sequelize);

module.exports = database;