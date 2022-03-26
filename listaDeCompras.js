/*
    Lista de compras con JS utilizando arreglos.
*/

var miListaDeCompras = [
  ["Cereal", 3],
  ["Leche", 12],
  ["Pan", 4],
  ["Refresco", 8],
  ["Jabon", 3],
];

console.log(
  `Voy a comprar ${miListaDeCompras[0][1]} cajas de ${miListaDeCompras[0][0]}`
);
console.log(
  `Voy a comprar ${miListaDeCompras[1][1]} cajas de ${miListaDeCompras[1][0]}`
);
console.log(
  `Voy a comprar ${miListaDeCompras[2][1]} cajas de ${miListaDeCompras[2][0]}`
);
console.log(
  `Voy a comprar ${miListaDeCompras[3][1]} cajas de ${miListaDeCompras[3][0]}`
);
console.log(
  `Voy a comprar ${miListaDeCompras[4][1]} cajas de ${miListaDeCompras[4][0]}`
);





let selectionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (temp > array[j]) {
        temp = array[j];
      }
    }
    var indice = array.indexOf(temp);
    var valorTemp = array[i];
    array[i] = temp;
    array[indice] = valorTemp;
  }
  return array;
};
console.log(selectionSort([1, 3, 4, 2, 5, 6, 7, 8]));
