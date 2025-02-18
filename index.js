const express = require('express');
const app = express();
const port = 3001;

// Ruta principal
app.get('/', (req, res) => {
    res.send("¡Hola desde GitHub Actions y Vercel!");
});

// Iniciar el servidor.
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
