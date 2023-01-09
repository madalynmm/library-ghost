const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookUser extends Model { }

BookUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'id'
            }
        },
        assignment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'bookassignment',
                key: 'id'  
            }
        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'bookuser',
    }
);

module.exports = BookUser;