const Sequelize = require('sequelize');
const db = require('../config');

const Department = db.sequelize.define(
    'Department',
    {
        dept_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        building: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        budget: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        }
    },{
        tableName: 'Department',
    }
);

//Export
module.exports = Department;