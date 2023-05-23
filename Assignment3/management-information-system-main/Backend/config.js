// const mysql = require('mysql');
// require('dotenv').config() 

// var connection = mysql.createConnection({
//     host: process.env.DBLink,
//     user: 'admin',
//     password: process.env.DBpassword,
//     port: "3306",
//     pool: {
//         max: 50,
//         min: 25,
//         acquire: 60000,
//         idle: 10000
//     }
// })

// connection.connect(function (err) {
//     console.log( process.env.DBLink);
//     if (!err) {
//         console.log("Database is connected ... ");
//     } else {
//         console.log("Error connecting database ... ",err);
//     }
// });
// const Sequelize = require('sequelize');
// require('dotenv').config() 

// const sequelize = new Sequelize( process.env.database,  process.env.username,  process.env.DBpassword, {
//     host:  process.env.DBLink,
//     dialect: 'mysql',
//     operatorsAliases: false,
//     port: 3306,  
//     insecureAuth: true,
//     define: {
//         paranoid: true
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

// module.exports = sequelize;


const dbConfig = require("./db.config");

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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;