const connection = require("../../database/sequelize");
const sequelize = require("Sequelize") 

const Customers = connection.define("customers", {
    customerNumber: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    customerName: { type: sequelize.STRING },
    contactLastName: { type: sequelize.STRING },
    contactFirstName: { type: sequelize.STRING },
    phone: { type: sequelize.STRING },
    addressLine1: { type: sequelize.STRING },
    addressLine2: { type: sequelize.STRING },
    city: { type: sequelize.STRING },
    state: { type: sequelize.STRING },
    postalCode: { type: sequelize.INTEGER },
    country: { type: sequelize.STRING },
    creditLimit: { type: sequelize.INTEGER },
})

module.exports = Customers;