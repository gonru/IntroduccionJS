// Arrays o Arreglos

const numeros = [10, 20, 30, 40, 50];

// console.log(numeros);
// console.table(numeros);

// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// console.table(meses);

const arreglo = [
  "Hola",
  10,
  true,
  "si",
  { nombre: "jose", edad: 38, trabajo: "gestion" },
];

// Acceder a los valores de un arreglo

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// console.log(numeros[200]);

// Conocer el tamaño de un arreglo
// console.log(meses.length);

// numeros.forEach(function (numero) {
//   console.log(numero);
// });

// numeros[5] = 60;
// numeros[6] = 70;

// numeros[2] = 60;

// numeros.push(60);
// numeros.push(70);

// numeros.push(60, 70, 80); // push agrega elementos al final del arreglo

// numeros.unshift(-10, -20, -30); // unshift agrega los elementos al inicio del arreglo

// console.table(numeros);

// meses.pop(); // elimina el ultimo elemento
// meses.shift(); // elimina al inicio del elemento

// meses.splice(2, 1);

console.table(meses);

// Rest operator o spread operator

// const nuevoArreglo = [...meses, "Junio"];
const nuevoArreglo = ["Junio", ...meses];

console.table(nuevoArreglo);

// métodos arrays
