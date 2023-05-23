const Sequelize = require('sequelize');
const db = require('../config');

const classroom = db.sequelize.define(
    'classroom',
    {
        class_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        building: {
            type: Sequelize.DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        room_number: {
            type: Sequelize.DataTypes.INTEGER(15),
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        capacity: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        },

    },{
        tableName:'classroom'
    }
);

//Export
module.exports = classroom;