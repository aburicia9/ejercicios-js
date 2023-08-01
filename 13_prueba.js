let cliente = {
    nombre: "Adolfo",
    apellido: "Dominguez",
    dni: 43565789,
    deuda:500

}

for (prop in cliente){

    if (prop === "apellido")
    console.log(cliente[prop])


}

