/*
    Permite pasar cualquier numero de argumentos a una funcion, y que esos argumentos se agrupen como un arreglo.

    1.- definimos una funcion.
    2.- usamos el operador rest '...args'.
    3.- pasamos los argumentos a la funcion y los convierte en arreglos.
*/
function miFuncion(...args) {
  console.log(args);
}
miFuncion(1, 2, 3, 4, 5, "hola", "mundo"); //Resultado: [ 1, 2, 3, 4, 5, 'hola', 'mundo' ]
miFuncion([1, 2, 3], [4, 5, 6]); //Resultado: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//Como sabemos que es un arreglo podemos usar la propiedad .length para trabajar con el.
function miFuncion(...args) {
  console.log(args.length);
}
miFuncion(1, 2, 3, 4, 5, "hola", "mundo"); //Resultado: 7;

//Modificar una funcion con rest.
/*
    1.- .reduce() con estos argumentos suma los elementos del arreglo y retorna el resultado.
    2.- pasamos una funcion flecha como argumento.
    3.- modificamos la lista de parametros con operador rest para tomar cualquier numero.
*/
//Sin rest
const sumar = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

//Con rest
const sumarRest = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
