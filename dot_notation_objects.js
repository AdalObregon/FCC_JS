/*
    Para acceder a las propiedades de un objeto se utiliza
    el nombre la variable seguido de un '.' y luego el nombre de la propiedad.
*/

var miMascota = {
  nombre: "Bigotes",
  edad: 1,
  peso: 2,
  raza: "Mariposa",
};

console.log(miMascota.nombre);
console.log(miMascota.edad);
console.log(miMascota.peso);
console.log(miMascota.raza);

/*
    Acceder a las propiedades, notacion de corchetes.

    IMPORTANTE!!!!!!!!
    En el nombre de las ultimas dos propiedades tienen espacios, pero como las rodeamos con comillas ''
    podemos escribirlas.
    Solo podemos omitir las comillas cuando el nombre tenga una sola palabra, si tiene mas de una palabra
    y hay espacio entre el nombre es obligatorio rodearlo entre comillas ''.
*/

var miCuaderno = {
  color: "Azul",
  categoria: 3,
  "numero de paginas": 200,
  "numero de hojas": 100,
};
console.log(miCuaderno.color); //Notacion de puntos
console.log(miCuaderno["color"]); //Notacion de corchetes, nos permite acceder al tipo de propiedades que tienen espacios en su nombre, en ese caso es obligatorio pero tambien la podemos usar para acceder a cualquier propiedad.
console.log(miCuaderno["numero de paginas"]);
// console.log(micuaderno.numero de paginas); // error

/*
    Acceder a propiedades: Variables

    Importante!!!
    No se puede usar con la propiedad de punto, solo con corchetes porque con la propiedad de punto se debe describir explicitamente el nombre de la propiedad, no podemos usar una variable.
*/
var resultados = {
  1: "Bruce300",
  2: "Bigotes777",
  3: "Laika543",
  4: "Botija655",
};
var posicion = 4; //Forma de acceder al valor de la propiedad 4.

console.log(resultados[posicion]); //Escribimos el nombre da la variable que contiene al objeto, y entre corchetes pasamos en lugar del nombre de la propiedad, pasamos el nombre de la variable 'Posicion', es lo equivalente a poner 4, pero como estamos escribiendo una variable podemos trabajar con la variable en el programa y hacer que el acceso a la propiedad sea mas dinamico.

/**
  Actualizar Propiedades
*/

var mochila = {
  color: "azul",
  size: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};

console.log(mochila.color); // azul

mochila.color = "verde"; // Actualizar el valor a verde

console.log(mochila.color); // verde

console.log(mochila.contenido);
mochila.contenido.push("Lapiz"); //agregar o quitar un lapiz a la mochila accediendo a la propiedad contenido
console.log(mochila.contenido);

mochila.contenido = []; //Asignar un arreglo completamente nuevo
console.log(mochila.contenido);

/*
  Agregar Propiedades

  Vamos a agregar la propiedad de vistas al objeto curso.

  Si intentas acceder a una propiedad que aun no existe en el objeto el valor que se va a retornar sera undefined.
*/

var curso = {
  titulo: "Aprende JavaScript deste cero",
  idioma: "Español",
  duracion: 30,
};

curso.vistas = 1000; //Asignando nueva propiedad con su valor al objeto, notacion de punto.
curso["vistas"] = 34500; //Notacionde corchete
console.log(curso);

/*
  Eliminar Propiedades

    La palabra clave aqui es 'Delete'
    si queremos borrar la propiedad duracion debemos escribir la palabra clava 'delete' seguida del nombre de la variable que tiene el objeto {} luego un punto y el nombre de la propiedad.
    Ejemplo:
    delete curso.duracion;
*/

var curso = {
  titulo: "Aprende JavaScript deste cero",
  idioma: "Español",
  duracion: 30,
};
console.log(curso);

delete curso.duracion;

console.log(curso);

/*
    Objetos para busquedas
*/

function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Asufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}

// como seria correcto hacerlo

function buscarElementoQuimico(simbolo) {
  var elementosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio",
  };

  return elementosQuimicos[simbolo];
}

console.log(buscarElementoQuimico('Al'));
console.log(buscarElementoQuimico('S'));
console.log(buscarElementoQuimico('Cl'));
console.log(buscarElementoQuimico('He'));
console.log(buscarElementoQuimico('B'));
console.log(buscarElementoQuimico('Li'));

