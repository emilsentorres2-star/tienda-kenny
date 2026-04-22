// 1. Importamos las herramientas que instalamos
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 2. Inicializamos la aplicación
const app = express();

// 3. Middlewares (Filtros de seguridad y lectura)
app.use(cors()); // Permite que Angular se conecte
app.use(express.json()); // Permite que el servidor entienda formato JSON
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// 4. Conexión a MongoDB
// Usamos la variable que guardamos en el archivo .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ ¡Conectado exitosamente a MongoDB!'))
    .catch((error) => console.error('❌ Error de conexión:', error));

// 5. Ruta de prueba (Para saber que el servidor está vivo)
app.get('/', (req, res) => {
    res.send('Servidor de Tienda Kenny funcionando 🚀');
});

// 6. Encendemos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});