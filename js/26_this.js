// objecto This

const reservacion = {
  nombre: "Luis",
  apellido: "Torres",
  total: 5000,
  pagado: false,
  // arrow functions hace referencia a la ventana global, es mejor usar el function() en el método hace referencia al objeto
  informacion: function () {
    console.log(`El cliente ${this.nombre} reservo ${this.total}`);
  },
};

const reservacion2 = {
  nombre: "Pedro",
  apellido: "Valdivia",
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(`El cliente ${this.nombre} reservo ${this.total}`);
  },
};

console.log(reservacion.nombre);
console.log(reservacion.informacion());
console.log(reservacion2.informacion());
