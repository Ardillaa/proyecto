const mongoose = require('mongoose');

const CarreraOrganizadorSchema = mongoose.Schema({
    idCarrera: {
        type: String,
        required: true
    },
    idOrganizador: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Carrera_Organizadores', CarreraOrganizadorSchema);