const Sequelize = require('sequelize');
const db = require('../config');

const students = require('./student');
const section = require('./Section');
const Course = require('./Course');
const takes = db.sequelize.define(
    'takes',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            references:{
                model: students,
                key: 'id'
            }
        },

        course_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references:{
                model: Course,
                key: 'course_id'
            }
        },
        sec_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references:{
                model: section,
                key: 'sec_id'
            }
        },
        semester: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references:{
                model: section,
                key: 'semester'
            }
        },
        year: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references:{
                model: section,
                key: 'year'
            }
        },
        grade: {
            type: Sequelize.DOUBLE(2,2),
            allowNull: false,
        },
    },{
        tableName: 'takes'
    }
);

//Export
module.exports = takes;