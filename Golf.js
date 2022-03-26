/*
En el juego de golf cada hoyo tiene un par que representa
el numero promedio de golpes que se espera que haga un golfista
para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima
o por debajo del par esten tus golpes.

Tu funcion tomara los argumentos par y golpes.

Retorna la cadena correcta segun esta tabla que muestra
los golpes en orden de mayor a menor prioridad:

Golpes                  Retornar
---------------------------------
1                     'Hole-in-one!'
<= par - 2            'Eagle'
par - 1               'Birdie'
par                   'Par'
par + 1               'Bogey'
par + 2               'Double Bogey'
>= par + 3            'Go Home!'

par y golpes siempre seran numericos y positivos
*/

function puntajeDeGolf(par, golpes) {
  if (golpes === 1) {
    console.log("Hole-in-one!");
  } else if (golpes <= par - 2) {
    console.log("Eagle");
  } else if (golpes === par - 1) {
    console.log("Birdie");
  } else if (golpes === par) {
    console.log("Par");
  } else if (golpes === par + 1) {
    console.log("Bogey");
  } else if (golpes === par + 2) {
    console.log("Double Bogey");
  } else if (golpes >= par + 3) {
    console.log("Go Home!");
  }
}
puntajeDeGolf(4, 1);
puntajeDeGolf(4, 2);
puntajeDeGolf(4, 3);
puntajeDeGolf(4, 4);
puntajeDeGolf(4, 5);
puntajeDeGolf(4, 6);
puntajeDeGolf(4, 7);

//V Return
function puntajeDeGolf(par, golpes) {
  if (golpes === 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes === par - 1) {
    return "Birdie";
  } else if (golpes === par) {
    return "Par";
  } else if (golpes === par + 1) {
    return "Bogey";
  } else if (golpes === par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}
const guardar = console.log(puntajeDeGolf(4, 1));
guardar;
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 3));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));

//Filtrar datos de un arreglo con el metodo 'filter'
var numbers = [1, 1, 2, 3, 4, 2, 5, 6, 5, 4, 7];

const numbersFiltered = numbers.filter(function (ele, pos) {
  return numbers.indexOf(ele) == pos;
});
console.log(`array without filter ${numbers}`)
console.log(`Filtered array ${numbersFiltered}`);

//Filtrar datos de un arreglo con el metodo 'filter' y arrow functiions

var numbers = [1, 1, 2, 3, 4, 2, 5, 6, 5, 4, 7];

const filteredNumbers = numbers.filter(
  (ele, pos) => numbers.indexOf(ele) == pos
);
console.log(`array without filter ${numbers}`)
console.log(`Filtered array is ${filteredNumbers}`);



