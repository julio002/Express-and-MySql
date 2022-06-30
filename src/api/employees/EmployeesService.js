const repository = require("./EmployeesRepository")

exports.getAll = function () {
    return repository.getAll()
}

exports.getById = function (id) {
    return repository.getById(id)
}

exports.create = function (obj) {
    return repository.create(obj)
}

exports.update = function (id, obj) {
    return repository.update(id, obj)
}

exports.delete = function (id) {
    return repository.delete(id)
}