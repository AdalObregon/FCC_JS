/*
1.- Se declara una funcion con el nombre 'clasificarValor', se pasa como parametro 'valor'.
2.- Se declara una variable llamada respuesta, que sera la que guardara el resultado del procedimiento.
3.- Se declara la sentencia 'SWITCH', esta nos permite a partir de un valor decidir que va a pasar
    con solo ese valor.
4.- Una vez declarada la sentencia entre parentesis se escribe el valor que queremos usar dentro de la 
    estructura, en este caso el parametro de la funcion
5.- Dentro de las llaves se escribe 'CASE:', si el valor es = 1 asignamos a la variable respuesta la 
    palabra 'alpha'.
6.- Salimos de la sentencia con la sentencia, 'BREAK'.
7.- Retornamos la variable respuesta, con la palabra reservada 'RETURN', se pone despues de las llaves porque
    no es parte del 'SWITCH'.
8.- Hacemos un console.log llamando la funcion y pasandole como argumento el numero 1.
*/
function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gama";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}
console.log(clasificarValor(1));

//en comida

function menu(producto) {
  var respuesta;

  switch (producto) {
    case "Pizza":
      respuesta = "La Pizza basica cuesta $10,55";
      break;
    case "Hamburguesa":
      respuesta = "Las Hamburguesas cuestan $6.98";
      break;
    case "Helado":
      respuesta = "El Helado cuesta $2.8";
      break;
  }
  return respuesta;
}
console.log(menu("Pizza"));

//Switch con sentencia predeterminada (default).

function seleccionarIdioma(valor) {
  var idioma;

  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Italiano";
      break;
    case 3:
      idioma = "Frances";
      break;
    default:
      idioma = "Ingles";
      break;
  }
  return idioma;
}
console.log(seleccionarIdioma(4));

//Sentencias Switch con multiples casos

function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "Bajo";
      break;
    case 2:
    case 3:
      volumen = "Intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "Alto";
      break;
  }
  return volumen;
}
console.log(clasificarVolumen(3));

/*
    forma de declarar multiples valores para mas de dos casos.
    Ej:

    case 4:
    case 5:
    case 6:

    Ahora la variable que vamos a declarar con la string 'Alto';
      volumen = "Alto";
      break;

*/
