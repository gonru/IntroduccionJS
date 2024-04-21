// Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(producto.precioProducto);

// Destructing => sacar datos de uns estructura

// const { precio } = producto;
// const { nombreProducto } = producto;
const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
