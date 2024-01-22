# MEAN Stack

Este proyecto es una aplicación que permite realizar procesos como la insercion y eliminacion de productos, utilizamos un json como base de datos estatica ademas para gestion del backend utilizamos las dependencias de Express, Cors, Axios, Nodemon, Concurrently. Para el cliente utilzamos la dependencia de Axios para manjear las peticiones HTTP. 

## Configuración del Proyecto

### Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- MongoDB: [Descargar MongoDB](https://www.mongodb.com/try/download/community)

### Pasos para Configurar el Proyecto

**Clonar el Repositorio:**
   ```bash
   git clone https://github.com/DavidCantunaMorales/TodoList.git
   ```
**Distribución de Carpetas:**
* ClientTodoList
* ServerTodoList

**Intalación de Dependencias:**  

Dentro de la carpeta ```ClientTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   npm install
   ```
Esto descargara todas las dependencias necesarias para ejecutar el proyecto. 

## Ejecucion de los Servidores

**Servidor del Frontend**

Dentro de la carpeta ```ClientTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   ng serve --o
   ```
Esto inicializara el servidor y se abrira una pestaña del navegador que tengas como principal mostrando el FrontEnd de la aplicacion.

**Servidor del BackEnd**

Dentro de la carpeta ```ServerTodoList``` abrir una termina y ejecutar el siguiente comando:
   ```bash
   npm run dev
   ```

Esto inicializara el servidor y por consola mostrar un mensaje diciendo "El servidor está escuchando en el puerto 3000"
"DB conectada"

Con esto la aplicacion es lista y en funcionamiento para ser usada. :3

## Indicaciones Adicionales

Aquie poner algunas indicaciones mas despues si es que es necesario
