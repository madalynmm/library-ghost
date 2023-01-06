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
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // assignment_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // book_user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'books',
    }
);

module.exports = Books;