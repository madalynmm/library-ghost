const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookAssignment extends Model { }

BookAssignment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // not sure if this needs to be primary key, or ISBN
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'bookassignment',
    }
);

module.exports = BookAssignment;