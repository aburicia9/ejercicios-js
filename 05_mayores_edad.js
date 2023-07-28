// El Gobierno se ha quedado sin dinero y ya no puede seguir regalando pasajes en tren.
// A si que quieren saber cuántos integrantes de tu familia son menores de edad.
// De esa forma podrán contabilizar la cantidad de viajes posibles y finalmente aumentar los impuestos.
// Ayúdales!, entrégales la cantidad de menores de 18 en tu familia.

const family = [
    { firstName: 'Antonio', lastName: 'García', age: 73, sex: 'm', relationship: 'abuelo' },
    { firstName: 'María Carmen', lastName: 'Rodríguez', age: 70, sex: 'f', relationship: 'abuela' },
    { firstName: 'Manuel', lastName: 'González', age: 71, sex: 'm', relationship: 'abuelo' },
    { firstName: 'María', lastName: 'Fernández', age: 69, sex: 'f', relationship: 'abuela' },
    { firstName: 'José', lastName: 'García', age: 55, sex: 'm', relationship: 'papá' },
    { firstName: 'Carmen', lastName: 'González', age: 53, sex: 'f', relationship: 'mamá' },
    { firstName: 'Francisco', lastName: 'García', age: 40, sex: 'm', relationship: 'hermano' },
    { firstName: 'Ana María', lastName: 'García', age: 36, sex: 'f', relationship: 'hermana' },
    { firstName: 'Laura', lastName: 'García', age: 30, sex: 'f', relationship: 'hermana' },
    { firstName: 'David', lastName: 'García', age: 25, sex: 'm', relationship: 'hermano' },
    { firstName: 'Juan', lastName: 'García', age: 17, sex: 'm', relationship: 'sobrino' },
    { firstName: 'María Pilar', lastName: 'López', age: 15, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Isabel', lastName: 'García', age: 14, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Josefa', lastName: 'López', age: 13, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Javier', lastName: 'López', age: 10, sex: '', relationship: 'sobrino' }
]


//Filter para seleccionar cada uno de los integrantes menores de 18 años
// let contador = 0
// for (const edad of family){
//     if(edad.age<=18){
//         contador++
//     }    
// }

// console.log("Hay "+contador+" menores de edad")

const contadorMenoresEdad = family.filter(integrante => integrante.age <= 18).length;

console.log("Hay " + contadorMenoresEdad + " menores de edad");
