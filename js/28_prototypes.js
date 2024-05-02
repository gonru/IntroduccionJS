// prototypes
// esta es la forma antigua de POO
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// los prototipos genera crear solo funciones para un objeto en especifico
// ejemplo prototype
Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
};

Producto.prototype.obtenerPrecio = function () {
  return this.precio;
};

function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// ejemplo prototype
Cliente.prototype.formatearCliente = function () {
  return `El cliente ${this.nombre} ${this.apellido}`;
};

// const producto2 = new Producto();
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto("Laptop", 300);

const cliente1 = new Cliente("Pedro", "Valdivia");

console.log(producto2);

// se rompe al usar cliente no tiene los mismo parametros
function formatearProducto(producto) {
  return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`;
}

// console.log(formatearProducto(producto2));

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto3.obtenerPrecio());
console.log(cliente1.formatearCliente());
