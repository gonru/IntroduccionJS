// Declaración de la función

function sumar() {
  console.log(10 * 10);
}

// Llamar a una función

sumar();

// Expresión de la función

const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

// IIFE
// Se manda a llamar a si misma, sirve para proteger o encapsular el código
// permite proteger que no se mezclen las variables de otros archivos js

(function () {
  console.log("Esto es una función");
})();

// Hoisting, es mandar a llamar antes de declarar las variables

sumar3();

function sumar3() {
  console.log(20 * 11);
}

// Expresión de la función

sumar4();

const sumar4 = function () {
  log(3 + 3);
};
