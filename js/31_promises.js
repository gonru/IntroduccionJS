// Promises o promesa

// refleja un valor que podra estar disponible ahora o en futuro o nunca

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = false;

  if (auth) {
    // el promise se cumple activa el resolve
    resolve("Usuario autenticado");
  } else {
    // en el caso promise no se cumple activa el reject
    reject("No se pudo iniciar sesión");
  }
});

// console.log(usuarioAutenticado);
// usuarioAutenticado
//   .then(function (resultado) {
// 		// se puede usar arrow functions
//     // console.log("desde el promise");
//     console.log(resultado);
//   })
//   .catch(function (error) {
// 		// para ver datos reject con .catch w
//     console.log(error);
//   });

// se puede usar arrow functions en una sola funcion
usuarioAutenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

// falta usar el .then() para acceder al promise
console.log(usuarioAutenticado);

// En los promises existen 3 valores son estados
// Pending:  No se ha cumplido pero tampoco rechazado en el limbo
// Fulfulled  : Ya se cumplio
// Rejected ; Se ha rechazado no se pudo cumplir
