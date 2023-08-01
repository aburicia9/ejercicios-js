// Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
// * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
// * NO hace falta comprobar que ambas palabras existan.
// * Dos palabras exactamente iguales no son anagrama.

function anagrama(palabra1, palabra2){


    const eliminar1 = palabra1.replace(" ", "").toLowerCase()
    const eliminar2 = palabra2.replace(" ", "").toLowerCase()
    const palabra1Ordenada = eliminar1.split("").sort().join("")
    const palabra2Ordenada = eliminar2.split("").sort().join("")
    

    return palabra1Ordenada === palabra2Ordenada

}

const casa = anagrama("casana", "nasaca")
console.log(casa)