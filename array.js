/*los arreglos son mutables, esto quiere decir que pueden ser cambiados por otro valor,
  a diferencia de las strings que son inmutables, es decir que no se puede asignar otro valor.
*/
var miArreglo = [10,20,30]; //declaracion de un array de 3 elementos.

miArreglo[0] = 40; //llamar el indice [0] de un arreglo para asignarle el valor 40;

miArreglo[1] = 'Hola';  // se puede incluso incluir otro tipo de dato al array.

miArreglo[2] = [2,3,4]; // inclusive se puede agregar un arreglo anidado dentro del array.

console.log(miArreglo); // imprimir el arreglo con los nuevos valores.


/*
Acceder a arreglos multidimensionales:
los arreglos que contienen arreglos anidados se conocen como multidimensionales.

*/

var miArreglo = [[1,2,3], [4,5,6], [7,8,9]] // se tienen 3 elementos en el array anidados.

/*
Arreglo:            [[1,2,3], [4,5,6], [7,8,9]]
Indices:                0        1        2
Indices Anidados      0 1 2    0 1 2    0 1 2
*/

console.log(miArreglo[0][2]); // de esta manera accedemos al numero 3 del primer arreglo.
console.log(miArreglo[1][1]); // de esta manera accedemos al numero 5 del segundo arreglo.
console.log(miArreglo[2][0]); // de esta manera accedemos al numero 7 del tercer elemento.