
let maquinarios = {
    laptos: {
        precios: 12,
        stock: 23
    },
    mouse: {
        precios: 20,
        stock: 10
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
    
    //fuimos  alas casa de maquinaria para haceder a sus hijos y los hijos los esta guardando productos para buscarlos usamos [] y para acceder a ellos luego que los buscamos [] utilizamos .punto
    const calculo =+ maquinarios[productos].precios * maquinarios[productos].stock ;
    console.log(`esta variable guarda ${calculo}`)
}


