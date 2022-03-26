/*
    Podemos convertir una cadena de caracteres a un numero.
*/
function convertirAEntero() {}
console.log(parseInt("-2.2"));

//Al momento de querer sumar cadenas de caracteres que tienen un numero en su interior se concatenarian, pero con parseInt esto no ocurre.

//De esta manera estamos solo concatenando el texto.
var a = "1500";
var b = "2750";
console.log(a + b);

//Si les agregamos la funcion parseInt a las variables entonces realizaria la suma.

var a = parseInt("1500");
var b = parseInt("2750");
console.log(a + b);

/*
    FUNCION 'parseInt()' CON UNA BASE

    Tambien se puede usar de una forma mas poderosa, porque se puede convertir una cadena de caracteres al sistema decimal, es decil al entero.

    1.- Mostramos el resultado con 'console.log()'
    2.- Vamos a llamar a la funcion parseInt.
    3.- Pasamos la cadena de caracteres con "01"
    4.- Para especificar que el sistema numerico del numero es binario debemos pasar un segundo argumento con un valor 2, que representa la base de ese sistema. Es base 2.
*/

console.log(parseInt("110111", 2));

//EJEMPLO SISTEMA HEXADECIMAL, SU BASE ES 16

console.log(parseInt('3E0A',16));
