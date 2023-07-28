// Haremos un juego, el ordenador elegirá un número entre el 1 y el 10.
// Y te preguntará el número un máximo de 3 veces: si aciertas tu ganas, si después de 3 intentos no aciertas, pierdes.


   let num = Math.floor(Math.random() * 10) + 1;

let intentos = 1;
let numero = prompt("Introduce un numero");
let numeroEntero = parseInt(numero);

while (intentos < 3 && numeroEntero !== num) {
  intentos++;
  numero = prompt("Introduce un numero");
  numeroEntero = parseInt(numero);
}

if (numeroEntero === num) {
  console.log("Conseguido");
} else {
  console.log("Has perdido");
}

console.log(num)