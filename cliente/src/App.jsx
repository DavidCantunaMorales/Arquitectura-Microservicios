import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

const GET_API_URL = "http://localhost:3001/obtenerProductos";
const POST_API_URL = "http://localhost:3002/agregarProducto";
const DELETE_API_URL = "http://localhost:3003/eliminarProducto";

function App() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState([]);

  // Aqui es donde vamos a renderizar todos los productos que tenemos, cada que se carge la aplicacion.
  useEffect(() => {
    axios
      .get(GET_API_URL)
      .then((response) => setProductos(response.data)) // Asignando los productos en el arreglos vacio
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);

  // Agregar un producto
  const agregarProducto = () => {
    axios
      .post(POST_API_URL, nuevoProducto)
      .then((response) => {
        setProductos([...productos, response.data]);
        setNuevoProducto({});
        setNuevoProducto({ title: "", price: "" });
      })
      .catch((error) =>
        console.error("Error al agregar un nuevo producto:", error)
      );
  };

  // Eliminar un producto
  const eliminarProducto = (id) => {
    axios
      .delete(`${DELETE_API_URL}/${id}`)
      .then(() => {
        // Filtrar los productos para excluir el producto eliminado
        const nuevosProductos = productos.filter(
          (producto) => producto.id !== id
        );
        setProductos(nuevosProductos); // Seteamos los nuevos productos
      })
      .catch((error) => console.error("Error al eliminar el producto:", error));
  };

  return (
    <div>
      <h1>CRUD DE PRODUCTOS</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Nombre del Producto"
          value={nuevoProducto.title}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, title: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Precio"
          value={nuevoProducto.price}
          onChange={(e) =>
            setNuevoProducto({
              ...nuevoProducto,
              price: e.target.value,
            })
          }
        />
        <button onClick={agregarProducto}>Crear Nuevo Producto</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.title}</td>
              <td>${producto.price}</td>

              <td>
                <button onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
