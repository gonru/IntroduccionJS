// Async / Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos... espere...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
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
    // const clientes = await descargarNuevosClientes();
    // const pedidos = await descargarUltimosPedidos();
    // console.log("Este código se bloquea");
    // console.log(clientes);
    // console.log(pedidos);

		// permite ejecutar los promises de forma simultanea envia un array de promise, sirve de performance
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();

// console.log("Este código no se bloquea");
