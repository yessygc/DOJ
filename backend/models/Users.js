const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true } 
});

module.exports = model('Users', UsersSchema)

// {} [] ||