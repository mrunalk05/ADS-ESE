const Sequelize = require('sequelize');
const db = require('../config');

const time_slot = db.sequelize.define(
    'time_slot',
    {
        time_slot_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique:true,
        },
        day: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        start_time: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: false,
        },
        end_time: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: false,
        },

    },{
        tableName: 'time_slot'
    }
);

//Export
module.exports = time_slot;