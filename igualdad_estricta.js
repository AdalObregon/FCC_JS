/*
    Lo usamos para comparar tipos de datos ===
*/
console.log(9 == 9); //true
console.log(9 == '9'); //true

// si usamos el signo de triple igualdad comparamos el tipo de dato y el valor.
console.log(9 === 9);    // true
console.log(9 === '9'); // false

var a;
var b;

a = 5;
b = 5;

console.log(a == b);   // true
console.log(a === b); // true

b = 8;

console.log(a == b); // false
console.log(a === b); // false

console.log(9 != '9'); // false
console.log(9 !== '9'); // true