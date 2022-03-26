/*
    El metodo .push nos ayuda a agregar elementos al final de un array.
*/
var estaciones = ['Invierno', 'Otoño', 'Primavera'];

    estaciones.push('Verano'); // De esta manera, con (push) podemos agregar 'Verano' al final del array.

    console.log(estaciones); // se imprime el array actualizado con la estacion del año.

/*
    El metodo .pop nos ayuda a eliminar el ultimo elemento de un array.
*/
var estaciones = ['Invierno', 'Otoño', 'Primavera', 'Verano'];

    var estacion = estaciones.pop(); // De esta manera, con .pop podemos eliminar el ultimo elemento del array
                      // el metodo .pop ademas de eliminar el elemento lo retorna, se puede guardar en una variable.
    console.log(estaciones);
    console.log(estacion); //de esta manera podemos imprimir el dato eliminado por el metodo .pop

/*
    El metodo .shift nos ayuda a eliminar el primer elemento de un array.
*/

var estaciones = ['Invierno', 'Otoño', 'Primavera', 'Verano'];

    estaciones.shift(); // de esta manera eliminamos 'Invierno' del array
    
    console.log(estaciones); //imprimimos el array y da como resultado [ 'Otoño', 'Primavera', 'Verano' ]

/*
    El metodo .unshift nos ayuda a agregar un arreglo al primer elemento de un array.
*/

var estaciones = [ 'Otoño', 'Primavera', 'Verano' ];

    estaciones.unshift('Invierno'); //espeficicamos que elemento queremos agregar al principio.

console.log(estaciones); // el nuevo valor del arreglo es: [ 'Invierno', 'Otoño', 'Primavera', 'Verano' ];