const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// --- 1. AGREGAR PRODUCTO (Solo para el Admin) ---
router.post('/add', async (req, res) => {
    try {
        const { nombre, descripcion, precio, imagen, stock } = req.body;
        const newProduct = new Product({ nombre, descripcion, precio, imagen, stock });
        await newProduct.save();
        res.status(201).json({ mensaje: "Producto agregado con éxito", producto: newProduct });
    } catch (error) {
        res.status(500).json({ error: "Error al guardar el producto" });
    }
});

// --- 2. VER TODOS LOS PRODUCTOS (Para todos) ---
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// --- 3. EDITAR UN PRODUCTO ---
router.put('/update/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ mensaje: "Producto actualizado", producto: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: "Error al editar" });
    }
});

module.exports = router;