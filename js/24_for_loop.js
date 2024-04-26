// bucle o iterador (loop)

// For loop

// for (let i = 0; i <= 100; i++) {
//   // console.log(i);
//   if (i % 2 === 0) {
//     console.log(`el número ${i} es par`);
//   } else {
//     console.log(`el número ${i} no es par`);
//   }
// }

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

// for (let i = 0; i < carrito.length; i++) {
//   const producto = carrito[i];
// console.log(producto);
//   console.log(producto.nombre);
// }

// While loop

// let i = 1; // indice

// while (i <= 100) {
//   // condicion
//   // console.log(i);
//   if (i % 2 === 0) {
//     console.log(`El número ${i} es par`);
//   } else {
//     console.log(`El número ${i} no es par`);
//   }
//   i++; // incremento
// }

// i = 0;

// while (i < carrito.length) {
//   const producto = carrito[i];
//   console.log(producto.nombre);
//   i++;
// }

// i = 20;

// while (i < 10) {
//   console.log("Desde el while loop");
//   i++;
// }

// Do While loop

let i = 100;

do {
  console.log(i);
  i++;
} while (i < 10);
