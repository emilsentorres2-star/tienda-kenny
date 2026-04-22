const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    password: { type: String, required: true },
    // El rol define si es 'admin' o 'cliente'
    role: { type: String, default: 'cliente' } 
});

module.exports = mongoose.model('User', UserSchema);