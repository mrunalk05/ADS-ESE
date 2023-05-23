const Sequelize = require('sequelize');
const db = require('../config');

const section =  require('./section')
const Instructor = require('./Instructor')

const teaches = db.sequelize.define(
    'teaches',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            references:{
                model: Instructor,
                key: 'id'
            }
        },
        course_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            references:{
                model: section,
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
    },{
        tableName: 'teaches'
    }
);

//Export
module.exports = teaches;