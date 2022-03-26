/*
    Cuando no sabemos el numero especifico de iteraciones que debemos realizar, pero sabemos que
    tiene que ser cierto para continuar el proceso se usa un ciclo while.
*/

var i = 0; // definimos una variable y le asignamos el valor 0;

//Dentro de los parentesis se escribe la condificion que tiene que ser verdadera para que se ejecute el codigo entre llaves, en el momento que la condicion se convierta en falsa el proceso se detiene, como i = 0 la condicion es verdadera/B, y se ejecutara. mostrarmos el mensaje con console.log e incrementamos el valor de i porque si no, la condicion siempre sera verdadera y nunca se detendra el proceso, con 'i++;'
while (i <= 10) {
  console.log("Hola mundo"); // el mensaje que tiene la variable i es 'Hola mundo'.
  i++;
}

//
var miArreglo = [];
var i = 0; //Se tiene que definir siempre el valor inicial.

console.log(miArreglo);

while (i <= 9) {
  miArreglo.push(i);
  i++;
}
console.log(miArreglo);
console.log(miArreglo.length);

//tabla Del 6
var tablaDelSeis = [];
var i = 0;

while (i <= 60) {   //si no se incluye el valor = se itera un numero antes del descrito.
  tablaDelSeis.push(i);
  i += 6;
}
console.log(tablaDelSeis);


//quitar numeros del arreglo

var numeros = [2,3,4,5,6,8,9,34];

while(numeros.length > 4){
    numeros.pop();
}
console.log(numeros);