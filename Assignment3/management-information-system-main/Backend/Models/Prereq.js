const Sequelize = require('sequelize');
const db = require('../config');

const Course = require('./Course');

const Prereq = db.sequelize.define(
    'Prereq',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            references: {
                model: Course,
                key: "course_id"
            },
            allowNull: false
        },
        prereq_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            primaryKey: true,
            allowNull: false, 
            references: {
                model: Course,
                key: "course_id"
            },
        }
    },{
        tableName: 'Prereq',
    }
);

//Export
module.exports = Prereq;