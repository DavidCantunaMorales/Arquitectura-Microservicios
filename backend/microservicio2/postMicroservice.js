const express = require("express");
const cors = require("cors");
const app = express();

const PUERTO = 3002;

app.use(cors());
app.use(express.json());

// Cargando los datos del json que tengo como base de datos estatica
let productosJson = require("../data.json");

// Función para generar un nuevo ID único
const generarId = () => {
  return Math.max(...productosJson.map((productos) => productos.id), 0) + 1;
};

// Funcion para agregar un producto.
app.post("/agregarProducto", (req, res) => {
  const nuevoProducto = { id: generarId(), ...req.body };
  productosJson.push(nuevoProducto);
  res.json(nuevoProducto);
});

app.listen(PUERTO, () => {
  console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});
