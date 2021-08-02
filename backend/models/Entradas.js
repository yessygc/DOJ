const { Schema, model } = require('mongoose');

new EntradasSchema({
    title: { type: String, required: true },
    resume: { type: String, required: true },
    author: { type: String, required: false },
    imagePath: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Entradas', EntradasSchema);

// {} [] ||