/*
    Retornar un valor
*/
function sumar(x, y) {   // se declara una funcion llamada sumar con los parametros x,y.
  return x + y;         // se usa la propiedad return para realizar la suma de estos dos parametros.
}
var a = 24;
var b = 40;

console.log(sumar(a, b)); // se manda a llamar la funcion con los argumentos 24,40, pero dentro de un console.log();


/*
    Retornar un valor undefined
*/

function sumar(x,y){
    console.log(x+y);
}
console.log(sumar(4,5)); // la funcion se ejecuta mostrando el valor, y el valor llamado de la funcion se muestra undefined, por ello es importante poner return.

/*
    Asignar un valor retornado.
*/

function sumar(x,y){
    return x + y;
}

var resultados = sumar(5,7); //Asignamos el valor resultante para no perderlo. var resultado = 8;

console.log(resultados); // regresa el valor de la variable que fue resultado de la suma de la funcion es decir 12.


//Asignar un valor a una varaible.

function crearCadenaConMeta(lenguajeDeProgramacion){ // se crea una funcion con el parametro lenguajeDeProgramacion.
    return 'Mi Meta es aprender' + lenguajeDeProgramacion; // se regresa la concatenacion de string + parametro.
}

var miMeta = crearCadenaConMeta(' JAVASCRIPT'); // se declara una variable llamada mi meta y se le pasa como argumento la string 'JAVASCRIPT'

console.log(miMeta); // regresa como resultado, la variable concatenada: "Mi Meta es aprender JAVASCRIPT";
