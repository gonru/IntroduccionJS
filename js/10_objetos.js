// Objetos

// const nombreProducto = "Monitor 20 Pulgadas";
// const precio = 300;
// const disponible = true;

// este el objeto creado
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// otra forma acceder al objeto
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

// Modificar objetos

// Agregar propiedades

producto.imagen = "imagen.jpg";
console.log(producto.imagen);

// Borrar propiedades
delete producto.disponible;
console.log(producto);
