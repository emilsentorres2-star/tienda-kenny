const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- RUTA DE REGISTRO ---
router.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, password, role } = req.body;

        // 1. Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedEmailPassword = await bcrypt.hash(password, salt);

        // 2. Crear el nuevo usuario
        const newUser = new User({
            nombre, apellido, correo, telefono,
            password: hashedEmailPassword,
            role: role || 'cliente'
        });

        await newUser.save();
        res.status(201).json({ mensaje: "Usuario creado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

// --- RUTA DE LOGIN ---
router.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        // 1. Buscar si el usuario existe
        const user = await User.findOne({ correo });
        if (!user) return res.status(400).json({ mensaje: "Usuario no encontrado" });

        // 2. Comparar la contraseña escrita con la encriptada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ mensaje: "Contraseña incorrecta" });

        // 3. Crear el Token (El pase VIP)
        const token = jwt.sign({ id: user._id, role: user.role }, 'secreto_kenny', { expiresIn: '1h' });

        res.json({ token, user: { nombre: user.nombre, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
});

module.exports = router;