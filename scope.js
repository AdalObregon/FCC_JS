/*
    Se puede usar en cualquier parte del codigo, se utiliza con la palabra reservada VAR
*/
var miVariableGlobal = 5;

console.log(miVariableGlobal); // vamos a poder acceder a ella porque se encuentra en un entorno global

function miFunction(){
    console.log(miVariableGlobal);
}
miFunction();

console.log(miVariableGlobal);

/*
    Se puede solo usar en un bloque o en un scope local con las palabras reservadas LET y CONST.
*/


function miFuncionLocal(){
    let miVariableLocal = 5;        // Se encuentra definida en un scope local.
    console.log(miVariableLocal);  // se imprime el valor 5.
}
miFuncionLocal();

console.log(miVariableLocal);      // al querer imprimirla fuera no se puede, porque esta dentro de la funcion.


/*
    Ambito local vs Global
*/
var miNombre = 'Adal';

function mostrarMiNombre(){
    var miNombre = 'Alberto';
    console.log(miNombre);
}
mostrarMiNombre(); // Se muestra el valor 'Alberto', porque estamos declarando la funcion de manera local, esta tiene mayor priodidad.