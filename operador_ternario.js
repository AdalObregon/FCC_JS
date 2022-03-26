/*
    ? = nos permite decir si la condicion es verdadera retorna 'x'.
    : = si la condicion es falsa retorna 'y'
*/

function retornarMinimo(x, y) {
  return x < y ? x : y;
}
console.log(retornarMinimo(1, 3));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);

/*
    Multiples Operadores Condicionales

    Se puede combinar el poder escribiendo multiples operadores condicionales o ternarios anidados.
*/

function compararNumeros(a, b) {
  return a === b               //Condicion.                         (if).
    ? "a y b son iguales"     //Retornar la cadena de texto.        (return).
    : a > b                  //Si no.                               (else if)
    ? "a es mayor que b"    //Retornar la cadena de texto.          (return).
    : "b es mayor que a";  //Si no es ninguno retornamos la cadena. (else)

  if (a === b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}
console.log(compararNumeros(3,3));
console.log(compararNumeros(5,3));
console.log(compararNumeros(1,3));