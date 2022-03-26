function generarFraccionAleatoria() {
  return Math.random();
}

var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

//NUMEROS ENTEROS ALEATORIOS

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatorioEntre0y19);

//GENERAR NUMEROS ALEATORIOS PASADOS POR PARAMETRO CON FOR.
/*
    1.-Se declara la funcion llamada 'generarEnteroAleatorio'
    2.-Como parametro pasamos 'limiteSuperior' que despues podra ser pasado como argumento.
    3.-Utilizamos 'Math.floor' y entre parentesis la operacion ('Math.random() * limiteSuperior');
    4.-Fuera de las llaves de la funcion ejecutamos un for, que va a empezar en 0 y va a ser menor a 15, generaremos 15 numeros aleatorios y lo multiplicaremos por el limite superior, que es el argumento que le pasamos a la funcion que limita el numero maximo y no puede generar un numero mayor a este.
    5.-Realizamos un 'console.log() donde ponemos dentro el nombre de la funcion y establecemos el argumento que es el numero maximo que va a llegar ese numero aleatorio que no puede pasar.

    Math.floor: DEVUELVE EL MAXIMO ENTERO MENOR O IGUAL A UN NUMERO.
    Math.random: RETORNA UN PUNTO FLOTANTE ALEATORIO DENTRO DEL RANGO [0,1], PERO EXCLUYENDO EL '1'.
*/
function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(10));
}

//NUMEROS ENTEROS ALEATORIOS EN UN RANGO
function rangoAleatorio(li, ls) {
  return Math.floor(Math.random() * (ls - li + 1)) + li;
}
for (let i = 0; i < 10; i++) {
    console.log(i);

  console.log(rangoAleatorio(18, 30));
}
