const { Schema, model } = require('mongoose');

new categoriasSchema = Schema ({
    categorias: [
        "Internacional",
        "Nacional",
        "Tlaxcala",
        "Nativitas",
        "Deportes",
        "Actualidad"
    ]
});

module.exports = model("Categorias", categoriasSchema)

// {} [] ||