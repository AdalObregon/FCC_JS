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
