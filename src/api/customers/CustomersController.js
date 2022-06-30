const express = require("express");
const service = require("./CustomersService");
const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((customers) => {
        res.send(customers);
    })
});

router.get('/:id', (req, res) => {
    service.getById(req.params.id).then((customer) => {
        res.send(customer);
    })
});

router.post("/", (req, res) => {
    service.create(req.body)
    res.send("O cliente foi criado com sucesso")
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body)
    res.send("O cliente foi alterando com sucesso")
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id)
    res.send("O cliente foi excluido com sucesso")
});

module.exports = router;