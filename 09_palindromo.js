// Escribe una función que reciba una palabra y retorne verdadero o falso según sea palíndromo o no.
// Un palíndromo es una palabra que escrita al revés retorna el mismo resultado.
// Por ejemplo los nombres Hannah, Ana, Bob ó la frase 'Dábale arroz a la zorra el abad'

const frase = "dabale arroz a la zorra del abad", frase2 = "hannah", frase3="bob"

function esPalindromo(texto) {
  // Eliminar espacios y convertir a minúsculas
  const textoSinEspacios = texto.replace(/\s/g, "").toLowerCase();
  
  // Revertir el texto
  const textoRevertido = textoSinEspacios.split("").reverse().join("");
  
  // Comparar el texto original con el texto revertido
  return textoSinEspacios === textoRevertido;
}

// Ejemplos de uso
console.log(esPalindromo("anilina")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("Hola Mundo")); // false


