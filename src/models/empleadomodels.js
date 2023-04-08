const mongoose = require("mongoose");

const empleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        requeri: true
    },
    apellidos: {
        type: String,
        requeri: true
    },
    dependencia: {
        type: String,
        requeri: true
    },
    salario: {
        type: Number,
        requeri: true
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);