const express = require("express");
const bodyParser = require("body-parser")

const employees = require("./src/api/employees/EmployeesController")
const customers = require("./src/api/customers/CustomersController")

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/employees", employees);

app.use("/customers", customers);

app.get('/', (req, res) => {
    res.send("Oie");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})