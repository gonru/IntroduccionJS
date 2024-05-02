// Fetch API es Reemplazo de AJAX

async function obtenerEmpleados() {
  // fetch("https//www.google.com/api");

  const archivo = "js/empleados.json";

  // fetch(archivo)
  //   .then((resultado) => {
  //     // console.log(resultado);
  //     return resultado.json();
  //     // return resultado.text();
  //   })
  //   .then((datos) => {
  //     // console.log(datos)

  //     const { empleados } = datos;
  //     // console.log(empleados);

  //     empleados.forEach((empleado) => {
  //       // console.log(empleado);
  //       console.log(empleado.id);
  //       console.log(empleado.nombre);
  //       console.log(empleado.cargo);

  //       document.querySelector(".contenido").textContent += empleado.nombre;
  //     });
  //   });

  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  // console.log(resultado);
  console.log(datos);
}

obtenerEmpleados();
