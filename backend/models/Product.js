const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String }, // Aquí guardaremos la URL de la foto
    stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);