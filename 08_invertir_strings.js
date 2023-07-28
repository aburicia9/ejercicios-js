// Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
// * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
//

function revertString(txt){
 const texto = txt
 const miArray = texto.split("")
//  console.log(miArray)
 const nuevo = miArray.reverse()
 const final = nuevo.join("")
 return final
}

const revertir1 = revertString("Hola Mundo")
const revertir2 = revertString("Hello World")
console.log(revertir1)
console.log(revertir2)
