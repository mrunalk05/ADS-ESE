const Sequelize = require('sequelize');
const db = require('../config');

const Department = require('./Department');

const Course = db.sequelize.define(
    'Course',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references: {
                model: Department,
                key: 'dept_name'
            }
        },
        credits: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        }
    }, {
    tableName: 'Course',
}
);

//Export
module.exports = Course;