const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model { }

Books.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'books',
    }
);

module.exports = Books;