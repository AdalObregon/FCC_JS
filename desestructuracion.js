/*
    Nos permite asignar las propiedades de un objeto a variables que podemos usar en nuestro programa.

*/

const usuario = {
  nombre: "Gino Smith",
  suEdad: 34,
};

//ANTES
const nombre = usuario.nombre;
const suEdad = usuario.edad;

//CON ES6+
// const { nombre, edad } = usuario;

var coordenadas = {
  x: 4,
  y: 6,
  z: 12,
};

//ANTES
// var x = coordenadas.x;
// var y = coordenadas.y;
// var z = coordenadas.z;

//ES6+
const { x, y, z } = coordenadas;
console.log(x);
console.log(y);
console.log(z);

//Objetos Anidados

const usuarios = {
  DeanWinchester: {
    edad: 34,
    correo: "DeanWinchester@gmail.com",
  },
};

const {
  DeanWinchester: { edad, correo },
} = usuarios;
const {
  DeanWinchester: { edad: edadDelUsuario, correo: correoDelUsuario },
} = usuarios; //Asignar a variables nuevas

console.log(edadDelUsuario);
console.log(correoDelUsuario);
console.log(edad);
console.log(correo);

//Otro ejemplo para

const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 61,
    maxima: 71,
  },
  hoy: {
    minima: 64,
    maxima: 77,
  },
  mañana: {
    minima: 68,
    maxima: 80,
  },
};
const {
  ayer: { minima, maxima },
} = PRONOSTICO_LOCAL;

console.log(minima);
console.log(maxima);

/*
    Sintaxis de desestructuracion: Arreglos.

    La sintaxis de desestructuracion tambien sirve para asignar variables a arreglos.
*/

var a;
var b;

[a, b] = [1, 2];
console.log(a);
console.log(b);

var c;

[a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

var a;
var b;

[a, b] = [1, 2, 3, 4, 5, 6];

console.log(a);
console.log(b);

//asignar el valor 5 para saltarnos la posicion ponemos tres ','

var a;
var b;
var c;

[a, b, , , c] = [1, 2, 3, 4, 5, 6];

console.log(a);
console.log(b);
console.log(c);

//Cambiar o intercambiar valores de dos Variables

var a = 8;
var b = 6;

[b, a] = [a, b];
console.log(a);
console.log(b);

/*
    Desestructuracion para rest
*/
var a;
var b;
[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(arr);

//remover los primeros 3 elementos de un arreglo

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arr) {
  const [, , , ...nuevoArreglo] = arr;
  return nuevoArreglo;
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);

//Pasar objeto como argumento

var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicacion: "España",
};

const actualizarPerfil1 = (informacionDePerfil) => {
  const { nombre, edad, nacionalidad, ubicacion } = informacionDePerfil;
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
};

//pasando como argumento
const actualizarPerfil = ({ nombre, edad, nacionalidad, ubicacion }) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
};

actualizarPerfil(nuevoPerfilCliente);

//Otro ejemplo

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85,
};

const puntoMedio = (est) => (est.max + est.min) / 2.0;

// con parametro
const mitad = ({max,min}) => (max + min) / 2.0;
console.log(mitad(estadisticas));
console.log(puntoMedio(estadisticas));