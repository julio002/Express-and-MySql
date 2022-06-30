const Sequelize = require('sequelize');
const sequelize = new Sequelize('classicmodels', 'root', '123456', {dialect: 'mysql', host: 'localhost',define: {
    freezeTableName: true,
    timestamps: false,
},},)
 
module.exports = sequelize;