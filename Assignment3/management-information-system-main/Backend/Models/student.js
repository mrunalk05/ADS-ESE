const Sequelize = require('sequelize');
const db = require('../config');

const Department = require('./Department');

const students = db.sequelize.define(
    'students',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references : {
                model:Department,
                key:'dept_name'
            }
        },
        tot_cred: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        },

    },{
        tableName: 'students'
    }
);

//Export
module.exports = students;