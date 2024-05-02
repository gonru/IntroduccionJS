// Async / Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

// se repite una sola vez en 5 segundos
// setTimeout(function () {
//   console.log("set timeout...");
// }, 5000);

// setInterval(function () {
//   console.log("set timeout...");
// }, 3000);

async function app() {
  // console.log("App lista");
  try {
    const resultado = await descargarNuevosClientes();
    console.log("Este código se bloquea");
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

app();

console.log("Este código no se bloquea");
