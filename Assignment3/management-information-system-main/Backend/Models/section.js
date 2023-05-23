const Sequelize = require('sequelize');
const db = require('../config');

const Course = require('./Course');
const classroom = require('./classroom')
const student = require('./student');
const time_slot = require('./time_slot')

const Section = db.sequelize.define(
    'Section',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            unique: true,
            primaryKey: true,
            references: {
                model: Course,
                key: "course_id"
            },
        },
        sec_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        semester: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        year: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        building: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references: {
                model: classroom,
                key: 'building'
            }
        },
        room_number: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references: {
                model: classroom,
                key: 'room_number'
            }
        },
        time_slot_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references: {
                model: time_slot,
                key: 'time_slot_id'
            }
        },
    }, {
    tableName: 'Section'
}
);

//Export
module.exports = Section;