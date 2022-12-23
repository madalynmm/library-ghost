const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model { }

Books.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // not sure if this needs to be primary key, or ISBN
            primaryKey: true,
            autoIncrement: true,
        },
        book_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // not sure if this needs to be primary key, or ID
            primaryKey: true,
        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dish',
    }
);

module.exports = Books;