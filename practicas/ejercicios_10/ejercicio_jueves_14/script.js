
let maquinarios = {
    laptos: {
        precios: 12,
        stock: 23
    },
    mouse: {
        precios: 20,
        stock: 0
    },
    teclado: {
        precios: 30,
        stock: 0
    }
}



let stockCeros = []
for(productos in maquinarios ){
    console.log(`${productos}`)
    
    if(maquinarios[productos].stock == 0){
       stockCeros.push(productos)
       console.log(stockCeros)
    }
}
