// string o cadenas de texto

// forma de inicializar la primera es la más habitual
// const producto = "Monitor de 20 pulgadas";
// const producto2 = String("Monitor de 30 pulgadas");
// const producto3 = new String("Monitor de 30 pulgadas");

// console.log(typeof producto);
// console.log(typeof producto2);
// console.log(typeof producto3);

const producto = 'Monitor de 20"';
const producto2 = "Monitor HD";

console.log(producto);
console.log(producto2);

// Metodos o propiedades
const tweet = "Aprendiendo JavaScript con el curso desarrollo web completo";
const email = 'correo@gmail.com'

// retorna el largo del texto
console.log(tweet.length);
// indexodf retorna posición
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));
console.log(email.indexOf("@"));

// include retrona true o false
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));

