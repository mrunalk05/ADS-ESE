const Sequelize = require('sequelize');
const db = require('../config');

const Department = require('./Department');

const Instructor = db.sequelize.define(
    'Instructor',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(15),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        inst_name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references : {
                model: Department,
                key:'dept_name',
            }
        },
        salary: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        }
    },{
        tableName: 'Instructor',
    }
);

//Export
module.exports = Instructor;