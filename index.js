const express = require("express");
const app = express(); //express es una funcion, lo que hacemos aqui es guardar lo que devuelve la funcion express en una variable "app" esto sginfica instanciar
const port = 3000; //ordena el codigo

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/home.html");
});
app.get("/contacto", (req, res) => {
  return res.sendFile(__dirname + "/views/contacto.html");
});
app.get("/productos", (req, res) => {
  return res.sendFile(__dirname + "/views/productos.html");
});
app.get("/sobre-nosotros", (req, res) => {
  return res.sendFile(__dirname + "/views/sobre-nosotros.html");
});

app.listen(port, () => console.log(`Escuchando en http://localhost:${port}`)); //ponemos el servidor en escucha
