const mongoose = require('mongoose');

const CarreraSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    cinicio: {
        type: String,
    },
    fecha: {
        type: Date,
        required: true
    },
    numCorredores: {
        type: Number,
    },
    numOrganizadores: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Carrera', CarreraSchema);