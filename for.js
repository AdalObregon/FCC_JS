/*
    Utilizamos el ciclo for cuando sabemos cuantas iteraciones van a ser necesarias, el ciclo for nos
    actualiza automaticamente la variable que antes teniamos que actualizar nosotros mismos con el ciclo while.

    se declara un ciclo for con la palabra reservada 'for', entre parentesis se agrega la estructura del ciclo for. Donde la primer parte es inicializar el valor de una variable, que se usara y actualizara en el ciclo. Ejemplo: let i = 0; estamos inicializando la variable llamada i con un valor 0.
    
    Posteriormente se agrega la condicion que va a decidir si el ciclo continua o no, Ejemplo i < 10;, mientras i sea menor que 10 el ciclo va a continuar.

    Para la ultima parte es como queremos actualizar la variable en cada iteracion, por ejemplo si queremos incrementar el valor de la variable i ponemos 'i++';

    como estamos trabajando con un arrey tenemos que mandar a llamar la variable 'miArreglo' que dentro se le asigno un arreglo vacio, para asignarle los datos debemos usar el metodo .push del arreglo para guardar en el arreglo vacio los datos del ciclo for que en este caso son numeros del 0 al 9.


*/

var miArreglo = [];

for (let i = 0; i <= 9; i++) {
  miArreglo.push(i);
}
console.log(miArreglo);

//Tabla del seis
var tablaDelSeis = [];
for (var i = 0; i <= 60; i += 6) {
  tablaDelSeis.push(i);
}
console.log(tablaDelSeis);

//Ciclo for: NUMEROS IMPARES

var numerosImpares = [];

for (let i = 1; i < 100; i += 2) {
  numerosImpares.push(i);
}
console.log(numerosImpares);

//Ciclo For: NUMEROS PARES TAREA

var numerosPares = [];
for (let i = 2; i <= 26; i += 2) {
  numerosPares.push(i);
}
console.log(numerosPares);

//Ciclo FOR: CONTAR HACIA ATRAS

var reducirNumeros = [];
for (let i = 50; i >= 25; i--) {
  reducirNumeros.push(i);
}
console.log(reducirNumeros);
console.log(reducirNumeros.length);

//CICLO FOR: CON ARREGLO HACIA ATRAS.

var miArreglo = [];
for (let i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

//ITERAR SOBRE UN ARREGLO CON CICLO FOR

/* Iterar sobre un arreglo significa obtener cada uno de los elementos de ese arreglo, y poder usarlos dentro del cuerpo del ciclo.

1.- Creamos un arreglo.
2.- Creamos una variable y le asignamos el valor 0;
3.- Hacemos un for que parta de 0 y sea menor al arreglo con la propiedad '.length' y sumamos en 1 con i++;
4.- se utiliza la variable declarada con el valor 0 y se le asigna el array.
5.- se hace un console.log de la variable y obtendremos la suma del array.
*/

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (let i = 0; i < miArreglo.length; i++) {
  console.log(`ITERACION ${i}`);
  console.log(miArreglo[i]);
  total += miArreglo[i];
}
console.log(total);

//ITERAR CADENAS DE TEXTOS

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
}

//CICLO FOR DENTRO DE UNA FUNCION

function contarNumerosPares(arreglo) {
  var total = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
console.log(contarNumerosPares([5, 3, 8, 1, 2, 4, 10]));

//CICLO FOR ANIDADO

/*
  Un ejemplo de ciclos for anidados es un for dentro de otro for.

  Son muy utiles para procesar estructuras de datos multidimensionales, por ejemplo si se tiene un arreglo que contiene arreglos es mas facil trabajar con ellos.
  
  para mostrar la iteracion del elemento se usa un console.log donde se le pasa el nombre de la variable que alberga los arreglos. ejemplo miArreglo[i]; entre corchetes se pasa la variable de iteracion del ciclo for que en este caso es 'i';
*/

var miArreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < miArreglo.length; i++) {
  console.log(">>Nueva iteracion");
  var arregloAnidado = miArreglo[i]; // Arreglo
  console.log(`Arreglo ${arregloAnidado}`);
  for (let j = 0; j < arregloAnidado.length; j++) {
    console.log(">>>Ciclo anidado:");
    console.log("Elemento");
    console.log(arregloAnidado[j]); // Elemento
  }
}

var miArreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < miArreglo.length; i++) {
  var arregloAnidado = miArreglo[i]; // Arreglo
  for (let j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]); // Elemento
  }
}

// Ciclo anidado 2 ARREGLO:
var textoAnidado = [
  ["Hola", "Soy", "Nuevo"],
  ["Me", "Llamo", "Adal"],
  ["Adios"],
];

//CICLO FOR SIN CONSOLE.LOG
for (let i = 0; i < textoAnidado.length; i++) {
  var arregloAnidado = textoAnidado[i];
  for (let j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]);
  }
}

//EXPLICACION EN CONSOLA COMO FUNCIONA UN CICLO FOR ANIDADO.
for (let i = 0; i < textoAnidado.length; i++) {
  console.log(">Nueva Iteracion:");
  var arregloAnidado = textoAnidado[i];
  console.log(`Arreglo: ${arregloAnidado}`);
  for (let j = 0; j < arregloAnidado.length; j++) {
    console.log(">>>Ciclo anidado:");
    console.log(`Elemento ${j}`);
    console.log(arregloAnidado[j]);
  }
}

var boletosDeRifa = [
  [100, 110, 125],
  [200, 250, 300],
  [202, 115, 245],
];

for (let i = 0; i < boletosDeRifa.length; i++) {
  var recorrerBoletos = boletosDeRifa[i];
  console.log(`Voletos vendidos por el vendedor ${i}`)
  for (let j = 0; j < recorrerBoletos.length; j++) { // el segundo for debe ir dentro del primer for siempre.
    console.log(recorrerBoletos[j]);
  }
}
