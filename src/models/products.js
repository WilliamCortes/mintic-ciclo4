const { DataTypes } = require('sequelize');

module.exports = sequelize => (
    sequelize.define('Products', {
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        photography: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
)