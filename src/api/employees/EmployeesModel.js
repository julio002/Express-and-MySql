const connection = require("../../database/sequelize");
const sequelize = require("Sequelize") 

const Employees = connection.define("employees", {
    employeeNumber: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    lastName: { type: sequelize.STRING },
    firstName: { type: sequelize.STRING },
    extension: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    jobTitle: { type: sequelize.STRING }
})

module.exports = Employees;