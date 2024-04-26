// Switch

// const metodoPago = "tarjeta";
const metodoPago = "bitcoin";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "efectivo":
    console.log("Pagaste con efectivo");
    break;
  case "cheque":
    console.log(
      "Pagaste con cheque, se revisara los fondos al siguiente día habil."
    );
  default:
    console.log("No se realizo el pago.");
    break;
}
