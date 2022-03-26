/*
    Son un tipo mas compacto de funciones que podemos escribir en JS, normalmente se utilizan cuando queremos escribir funciones anonimas.

    Las funciones flecha son muy utiles cuando necesitamos pasar una funcion como argumento a otra funcion, lo que hacemos es escribirla directamente como el argumento. 

    Funciones anonimas: Funciones que no tienen un nombre en especifico.

    1.- Definimos una funcion anonima, solo escribimos function(), parametros vacios
    2.- el cuerpo de la funcion es solo una sentencia return que retorna un objeto.
    3.- luego asignamos esa funcion a la const llamada fecha.
*/

//Sin Arrow Function
const fecha = function () {
  return new Date();
};
console.log(fecha());

//Con Arrow function
/*
    1.- quitamos la palabra function.
    2.- quitamos la llave que abre la funcion y la sentencia return.
    3.- despues de los () escribimos el simbolo '=>' que funciona como return.
*/
const nuevaFecha = () => new Date();
console.log(nuevaFecha());

//Arrow functions con parametros.

//Sin arrow function
const sumarTres = function (x) {
  return x + 3;
};

//Con arrow function
const sumarCuatro = (x) => x + 4;
console.log(sumarCuatro(25));

//Sin arrow function
const concatenarArreglos = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenarArreglos([1, 2], [3, 4, 5]));

//Con arrow Function
const concatenarOtrosArreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarOtrosArreglos([1, 2], [3, 4, 5]));

/*
    SI LA FUNCION ORIGINAL TIENE MAS DE UNA LINEA DEBEMOS MANTENER LAS '{}'
*/
//Sin arrow function
const sumar = function (a, b) {
  let num = 6;
  return a + b + num;
};
console.log(sumar(2, 4));

//Con arrow Function
const Sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};

console.log(Sumar(2, 4));

/*
    VALORES POR DEFECTO EN FUNCION FLECHA
*/
const incrementar = (num,valor = 1) => num + valor;
console.log(incrementar(5));
console.log(incrementar(5,3));