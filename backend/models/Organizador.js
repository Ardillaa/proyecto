const mongoose = require('mongoose');

const OrganizadorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
    },
    telefono: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    vehiculo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Organizadores', OrganizadorSchema);