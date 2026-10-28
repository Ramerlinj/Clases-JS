
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

let calculo = 0;

for(productos in maquinarios ){
    console.log(`${productos}`)
    
    if(maquinarios[productos].stock == 0){
       stockCeros.push(productos)
       console.log(stockCeros)
    }
    
    //fuimos  alas casa de maquinaria para haceder a sus hijos y los hijos los esta guardando productos para buscarlos usamos [] y para acceder a ellos luego que los buscamos [] utilizamos .punto
     calculo += maquinarios[productos].precios * maquinarios[productos].stock ;

     let i = maquinarios[productos]

     if( i.stock < 5){
        console.log(`inferior a cinco ${productos}`)
     }

     console.log(`los productos son${maquinarios[productos].length}`)
}

console.log(`esta variable guarda ${calculo}`)





