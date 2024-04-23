// entre los (son parametros)
function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}

// entre los (son argumentos o los valores reales)
sumar(10, 10);
sumar(6, 3);
sumar(3, 3);
sumar(1, 2);

sumar(6);
sumar();

const sumar2 = function (numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
};

sumar2(5, 10);
sumar2(4, 6);
sumar2(3, 2);
sumar2(8, 9);
sumar2(9);
sumar2();
