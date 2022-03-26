/*
    Un operador que hace exactamente lo contrario al operador rest.
    Toma un arreglo y lo descompone en sus element/Cs individuales para que la funcion pueda recibirlos y asignarlos a sus parametros correspondientes
*/

const numeros = [1, 2, 3];

function sumar(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y + z;
}

console.log(`la suma del array es ${sumar(...numeros)}`);
