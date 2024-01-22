const express = require("express");
const cors = require("cors");
const app = express();

const PUERTO = 3003;

app.use(cors());
app.use(express.json());

// Cargando los datos del json que tengo como base de datos estatica
let productosJson = require("../data.json");

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
