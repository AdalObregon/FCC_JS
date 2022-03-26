const users = [
  { name: "Adal", age: 23 },
  { name: "Bigotes", age: 30 },
  { name: "Laika", age: 17 },
  { name: "Bruce", age: 16 },
];

const hasMinors = users.some((user) => user.age < 18); //metodo some evalua que algunos elementos que se cumplan.
console.log(hasMinors);

const allMinors = users.every((user) => user.age < 18); //metodo every evalua que todos los elementos se cumplan.
console.log(allMinors);

const fruits = ["banana", "orange", "grape", "mango"];
const hasGrape = fruits.includes("grape");              //Verificar si un arreglo tiene un mismo elemento.
console.log(fruits);
console.log(hasGrape);

const dailyIncomes = [100, 120, 130, 140, 150, 100, 100];

const totalIncomes = dailyIncomes.reduce((total, income) => total += income);   // Suma los datos del array
console.log(totalIncomes);

for (let i = 0; i < 61; i+=6) {
    console.log (i);
}


var mi_cartera = 20;

var tortillas = 15;

var cambio = 0;

cambio = mi_cartera - tortillas;
console.log(`me sobraron ${cambio} pesos`);

if (cambio > 0) {
    console.log('me alcanca para un chicle')    
} else console.log('no me alcanca para el chicle :(');
