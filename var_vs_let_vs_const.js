/*
    Var vs Let

    Var:
    Una de las diferencias principales es que cuando declaramos una variable con var y le asignamos un valor vamos a poder hacerlo dos o mas veces.

    let:
    Cuando usamos let la situacion es diferente, porque no se puede declarar mas de una vez la misma variable. esto arrojaria un error, diria que la campista ya ha sido declarado
*/

var campista = "james";
var campista = "david";
console.log(campista);

let campista = "james";
let campista = "david";

console.log(campista);

//AMBITO DE var vs let
/*
    Cuando usamos var estamos creando una variable global si esta en el programa principal, o una variable local si esta definida dentro de una funcion, esta ultima se podra utilizar unicamente dentro de la funcion pero no fuera de esta.
*/

var miVariableGlobal = 4;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
  var miVariableLocal = 8;
  console.log(miVariableLocal);
}
miFuncion();

console.log(miVariableGlobal);
console.log(miVariableLocal); //NO ESTA DEFINIDA EN EL SCOPE GLOBAL, SOLO EN EL LOCAL.

//CONST
function calcularAreaCirculo(radio) {
  const PI = Math.PI;
  return radio < 0 ? undefined : PI * radio ** 2;
}
console.log(calcularAreaCirculo(10));

//MUTAR ARREGLO CON CONST

const MI_ARREGLO = [1, 2, 3, 4];
MI_ARREGLO = [5, 6, 7, 8]; //ERROR

//ESTO SI ES POSIBLE
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
console.log(MI_ARREGLO);
