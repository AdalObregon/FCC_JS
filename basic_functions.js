function mostrarMensaje() {
  // declarar una funcion llamada mostrarMensaje
  console.log("Hola, Mundo!"); // imprimir en consola lo que viene en parametro.
}
mostrarMensaje(); // mandar a llamar la funcion.

function sumar(x, y) {
  // lo que va en parentesis son parametros a usar despues en la funcion.

  var suma = x + y; // se le asigna el valor de la variable suma la operacion a + b;

  console.log(`El resultado de ${x} + ${y} es: ${suma}`); // realizamos una concatenacion para mostrar el texto.
}

sumar(10, 5); //mandamos a llamar la funcion y le pasamos los argumentos (10, 5); y nos da un resultado:
//  El resultado de 10 + 5 es: 15

/*
    Tambien se puede asignar variables y pasarlas como argumentos: ejemplo
*/

function sumar(x, y) {
  // lo que va en parentesis son parametros a usar despues en la funcion.

  var suma = x + y; // se le asigna el valor de la variable suma la operacion a + b;

  console.log(`El resultado de ${x} + ${y} es: ${suma}`); // realizamos una concatenacion para mostrar el texto.
}

var a = 10;
var b = 3;

sumar(a, b); //mandamos a llamar la funcion y le pasamos los argumentos (10, 5); y nos da un resultado:
//  El resultado de 10 + 3 es: 13


// Tambien puedes trabajar con strings.

function concatenarTresCadenas(cadena1, cadena2, cadena3){ //se declara una funcion con 3 parametros.

    console.log(`${cadena1} ${cadena2} ${cadena3}`); //Se agregan los espacios a cada cadena concatenada.

}

concatenarTresCadenas('Estoy','Aprendiendo', 'A programar'); // se le pasa el argumento a cada parametro.