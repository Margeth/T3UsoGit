const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Middleware para manejar solicitudes GET a la ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
