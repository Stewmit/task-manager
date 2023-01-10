const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Subtask = sequelize.define('subtask', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    isComplete: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Subtask