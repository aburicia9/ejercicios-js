// Tu pareja irá al supermercado por primera vez y no sabe qué cosas comprar.
// Ayúdale! hazle una lista de los 10 productos que no pueden faltar en tu casa

const compra = ["Leche", "Manzana", "Huevos", "Peras", "Alcachofa", "Zumo", "Agua", "Leche", "Lechuga", "Salmon"]

function listaCompra(lista){

    for(let i = 0; i<lista.length;i++){
        // console.log(compra[i])
    }

    return lista
}

const comprar = listaCompra(compra)
console.log("Tienes que comprar: ",compra.toString())