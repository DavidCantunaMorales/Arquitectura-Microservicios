const express = require("express");
const cors = require("cors");
const app = express();

const PUERTO = 3001;

app.use(cors());
app.use(express.json());

// Cargando los datos del json que tengo como base de datos estatica
let productosJson = require("./data.json");

// Función para generar un nuevo ID único
const generarId = () => {
  return Math.max(...productosJson.map((productos) => productos.id), 0) + 1;
};

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

// Funcion para agregar un producto.
app.post("/agregarProducto", (req, res) => {
  const nuevoProducto = { id: generarId(), ...req.body };
  productosJson.push(nuevoProducto);
  res.json(nuevoProducto);
});

// Funcion para eliminar un producto
app.delete("/eliminarProducto/:id", (req, res) => {
  const productoId = parseInt(req.params.id);

  productosJson = productosJson.filter(
    (producto) => producto.id !== productoId
  );

  res.json({ message: "Producto eliminado exitosamente." });
});

app.listen(PUERTO, () => {
  console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});
