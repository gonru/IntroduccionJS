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

// ForEach

// carrito.forEach(function (producto) {
//   // console.log("una vez por cada elemento");
//   // console.log(producto);
//   console.log(producto.nombre);
//   // console.log(producto.precio);
// });

// mostrar resultado o iterar es mejor usar un foreach
carrito.forEach((producto) => console.log(producto.nombre));
// const arr1 = carrito.forEach((producto) => producto.nombre);

// map => sirve para crear un nuevo arreglo
const arr1 = carrito.forEach((producto) => producto.nombre);
const arr2 = carrito.map((producto) => producto.nombre);

const arr3 = carrito.map(
  (producto) => `${producto.nombre} - ${producto.precio}`
);

console.log(arr1);
console.log(arr2);
console.log(arr3);
