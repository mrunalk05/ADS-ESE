const Sequelize = require('sequelize');
const db = require('../config');
const students = require('./student');
const Instructor =require('./Instructor');
 
const Advisor = db.sequelize.define(
    'Advisor',
    {
    s_id:{
        type:Sequelize.DataTypes.INTEGER(15),
        allowedNull:false,
        references : {
            model : 'students',
            key : 'id'
        }
    },
    i_id:{
        type:Sequelize.DataTypes.INTEGER(15),
        allowedNull:false,
        references : {
            model : 'Instructor',
            key : 'id'
        }
    }
},{
    tableName: 'Advisor'
}
);

//Export
module.exports = Advisor;