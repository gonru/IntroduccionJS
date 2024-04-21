"use strict"; // Correr JS en modo estricto

// Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Object.freeze(producto);
Object.seal(producto); // .freeze .seal(permite modificar propiedades) 

// con use strict generara un error
// producto.imagen = "imagen.jpg";

// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

// delete producto.precio;

console.log(producto);
