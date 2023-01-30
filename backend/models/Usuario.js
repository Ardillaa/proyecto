const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
    },
    telefono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);