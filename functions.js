/* Proximo en la fila

En informatica una cola (queue) es una estructura de datos abstracta
en la cual los elementos se mantienen en orde, Los nuevos elementos se pueden
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento)
como argumentos. Agrega el número al final del arreglo y luego elimina el primer
elemento del arreglo. La función proximoEnLaFila debe retornal el elemento que fue removido.
*/

function proximoEnLaFila(arr, elem){ //Se declara la funcion con parametros: (arr, elem) 
    arr.push(elem);                  // propiedad .pop agrega al final de un arreglo.
    return arr.shift();             // la propiedad de shift elimina el primer elemento.
}                                   // el metodo shift retorna el elemento del arreglo.

var miArreglo = [1,2,3,4,5]; //se define una variable con un arreglo.

console.log('Antes:' + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log('Despues:' + JSON.stringify(miArreglo));

//Ultimo en la fila con strings

function proximoEnLaFila(arr, elem){ // se crea una funcion con parametros arr, elem
    arr.push(elem);                  // se utiliza el metodo .push para agregar un elemento.
    return arr.shift();             // se guarda en return el primer elemento y se saca del array.
}

var miArreglo = ['Adal', 'Bigotes', 'Bruce', 'Laika']; // se crea un arreglo de nombres.

console.log('Antes:' + JSON.stringify(miArreglo)); // se imprime el arreglo de nombres

console.log(proximoEnLaFila(miArreglo, 'Frida')); // se imprime la funcion con los argumentos (miArreglo, 'Frida'); que corresponde el primero al array que fue declarado en la variable miArreglo y 'frida' es el elemento que se pasa con la propiedad .push

console.log('Despues:' + JSON.stringify(miArreglo)); // se imprime el array actualizado.