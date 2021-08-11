const { Schema, model } = require('mongoose');

const EntradaSchema = new Schema({
    title: { type: String, required: true },
    resume: { type: String, required: true },
    author: { type: String, required: false },
    isbn: { type: String },
    imagePath: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Entrada', EntradaSchema);

// {} [] ||