// Array functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("Javascript");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

// forEach + arrow

meses.forEach((mes) => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

// arrays functions
resultado = carrito.some((producto) => producto.nombre === "Celular");

// reduce iterar y dar valores
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

// método Filter

resultado = carrito.filter((producto) => producto.precio > 400);

resultado = carrito.filter((producto) => producto.nombre !== "Celular");

console.log(resultado);
