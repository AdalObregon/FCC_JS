/*
  identificar si un valor tiene una propiedad antes de usarla, esto se obtiene con
  el nombre de la varaible + .hasOwnProperty.
  Ej:
  miVariable.hasOwnProperty('value');
*/
var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};
console.log(miCuaderno.hasOwnProperty("color")); //true, porque si tiene la propiedad color.
console.log(miCuaderno.hasOwnProperty("origen")); //false, porque el objeto no tiene la propiedad.

// Para ilustrar como este metodo es muy util en un condicional definiremos una funcion que verificara si un objeto tiene la propiedad o no, va a tener dos parametros: objeto y propiedad

function verificarPropiedad(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return `propiedad: ${obj[prop]}`;
  } else {
    return "El objeto no tiene esta propiedad.";
  }
}
var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};
console.log(verificarPropiedad(miCuaderno, "precio"));

/*
  Objetos Complejos

    para acceder al valor de la propiedad type del objeto 1 es necesario poner '.' seguido de la propiedad. Ej:
    pizzaOrder[0].type; Esta seria la forma de acceder al primer arreglo la propiedad type con notacion '.'
    pizzaOrder[0]['type'];De esta manera se accede a la misma propiedad pero con corchetes, no olvidemos que tiene que ir la propiedad entre comillas 'propiedad'.
*/

var pizzaOrder = [
  {
    type: "Margarita",
    size: "individual",
    price: "5.67",
    toppings: ["extra cheese", "mushroms", "pineapple"],
    forTakeAway: "true",
  },
  {
    type: "4 cheeses",
    size: "family",
    price: 18.34,
    toppings: ["extra cheese", "pepper"],
    forTakeAway: "false",
  },
  {
    type: "Napolitan",
    size: "individual",
    price: 6.78,
    toppings: [],
    forTakeAway: true,
  },
];

console.log(pizzaOrder[0].type);
console.log(pizzaOrder[1]["toppings"]);
console.log(pizzaOrder[2]["type"]);

/*
  Objetos anidados
  EJEMPLO
*/
var miRecipe = {
  description: "My favorite dessert",
  price: 15.6,
  ingredients: {
    dough: {
      flour: "100 grs",
      salt: "1 tablespoon",
      water: "1 cup",
    },
    topping: {
      sugar: "120 grs",
      chocolate: "4 tablespoon",
      butter: "200 grs",
    },
  },
};
/*Para acceder al objeto dough, lo hacemos con el punto, para ello primero escribimos el nombre de la variable, seguido del punto, despues la propiedad en la cual se encuentra nuestro arreglo anidado, seguido de un punto y la propiedad que queremos acceder.
Ej: (miRecipe.ingredientes.dough);
*/

console.log(miRecipe.ingredients.dough);

/*
Para acceder a los valores dentro del objeto es necesario colocar otra notacion punto con la propiedad del objeto requerida, por ejemplo si queremos acceder al valor de la propiedad flour seria de la siguiente forma: miRecipe.ingredients.dough.flour
*/
console.log(miRecipe.ingredients.dough.flour);
console.log(miRecipe.ingredients.dough.salt);
console.log(miRecipe.ingredients.dough.water);
/*
  De igual manera se puede acceder a las mismas propiedades con corchetes y seria el mismo resultado.

  la ventaja de usar notacion de corchetes es que podemos escribir una variable, asi que podemos personalizar los valores que accedemos dependiendo el valor de una variable, esto es muy util si estas interactuando con el usuario y escoge una opcion, si quiere la cantidad de azucar, de sal, de chocolate.
  podemos personalizar el camino que nos lleva al valor con variables.

  Ejemplo:
*/
console.log(miRecipe.ingredients.dough[flour]);
console.log(miRecipe.ingredients.dough[salt]);
console.log(miRecipe.ingredients.dough[water]);

