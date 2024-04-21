const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 200 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

// forEach

meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

// includes
let resultado = meses.includes("Diciembre");
const resultado2 = carrito.includes("Celular");

// some ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
  return producto.nombre === "Celular";
});

// arrays functions
resultado = carrito.some((producto) => producto.nombre === "Celular");

// reduce iterar y dar valores
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

// arrow funcions
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

// metodo Filter

resultado = carrito.filter(function (producto) {
  return producto.precio > 400;
});

resultado = carrito.filter(function (producto) {
  // return producto.nombre === "Celular";
  return producto.nombre !== "Celular";
});

console.log(resultado);
