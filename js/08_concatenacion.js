// Concatenacion

const nombre = "Jose";
const email = "jose@gmail.com";

console.log(nombre + email);
console.log(nombre + " " + email);

// la forma antigua
console.log("nombre cliente " + nombre + " Email: " + email);
console.log("nombre cliente ", nombre, " Email: ", email);

// Template Strings - string literals
console.log(`Nombre de cliente: ${nombre} Email: ${email}`);
