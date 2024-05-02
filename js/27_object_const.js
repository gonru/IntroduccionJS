// POO programacion orientado a objetos

// object literal
const producto = {
  nombre: "Tablet",
  precio: 500,
};

// Object Constructor
// ya no es muy usada esta forma para instanciar  POO en JS

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// const producto2 = new Producto();
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
