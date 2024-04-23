// function sumar(n1, n2) {
//   return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuestos(total) {
  return total * 1.19;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuestos(total);

console.log(`El total ha pagar con impuestos es de: $${totalAPagar}`);
