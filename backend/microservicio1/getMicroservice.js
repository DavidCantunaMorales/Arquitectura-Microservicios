const express = require("express");
const cors = require("cors");
const app = express();

const PUERTO = 3001;

app.use(cors());
app.use(express.json());

// Cargando los datos del json que tengo como base de datos estatica
let productosJson = require("../data.json");

// Funcion para obtener todos los productos de mi json estatico
app.get("/obtenerProductos", (req, res) => {
  res.json(productosJson);
});

// Funcion para obtener solo 1 producto dependiendo del ID
app.get("/obtenerProductos/:id", (req, res) => {
  const productoId = parseInt(req.params.id);

  const productoEncontrado = productosJson.filter(
    (producto) => producto.id === productoId
  );

  if (productoEncontrado) {
    res.json(productoEncontrado);
  } else {
    res.status(404).json({ mensaje: "Producto no encontrado" });
  }
});

app.listen(PUERTO, () => {
  console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});
