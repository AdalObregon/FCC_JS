/*
    En el ciclo do while debemos tomar la parte inicial del ciclo while y escribirla luego de la llave que cierra, agregamos al final ';' y al inicio de la llave que abre escribimos la palabra clave 'do'
    y ahi tenemos un ciclo do while.

    La diferencia vs el ciclo while es que siempre se va a ejecutar al menos una vez la secuencia de instrucciones que tenemos, cuando nosotros teniamos el ciclo while la condicion se evaluaba si era verdadera o falsa, si era verdadera se ejecutaban las instrucciones por primera vez.

    Si era falsa no se ejecutaban las instrucciones, simplemente se saltaba el ciclo y se seguia mas alla del ciclo, pero con un ciclo do while la secuencia de instrucciones se ejecuta antes de evaluar la condicion.

    Cuando usar un ciclo do while??

        Cuando necesitas verificar un dato ingresado por el usuario, por ejemplo al llenar un formulario, en algun campo que sea llenado por un caracter no permitido, o tipos de datos no solicitados, se ejecuta al menos una vez el ciclo y entonces se puede verificar si este es correcto o enviar un mensaje solicitando que ingrese el dato correcto.
*/

var x;
x = 5;

// Estructura ciclo do while
do {
  console.log(x);
  x++;
} while (x > 10);

// Estructura ciclo while
while (x < 10) {
  console.log(x);
  x++;
}
