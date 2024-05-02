// POO - Clases

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
  }

  obtenerPrecio() {
    return this.precio;
  }
}

// const producto = new Producto();
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto("Laptop", 300);

console.log(producto2);
console.log(producto3);

// son prototypes los metodos de la clases
console.log(producto2.formatearProducto());
console.log(producto2.obtenerPrecio());

// Herencia

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su isbn ${this.isbn}`;
  }

  obtenerPrecio() {
    console.log(super.obtenerPrecio());
    console.log("Y si hay en existencia");
  }
}

const libro = new Libro("Javascript la Revolución", 120, "9102139840918");
console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
