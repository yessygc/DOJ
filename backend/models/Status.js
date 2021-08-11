const { Schema, model } = require('mongoose');

new statusSchema = Schema({
    tipo: [
        "Administrador", "Usuario"
    ]
});

module.exports = model('Status', statusSchema)

// {} [] ||