function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adios"); // Nunca se va a ejecutar porque esta despues del return.
}
console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined; //Si es positivo esta condicion es falsa, esta linea nunca se ejecuta y se pasa a la de abajo
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(-25));
