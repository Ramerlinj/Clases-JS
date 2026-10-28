let inventariosEmpresa = {
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

let productosAgregar = "mouse";
let stockAumento = 30;

let precios = 0;

const tipoProductos = Object.keys(inventariosEmpresa).length;
console.log(tipoProductos)

for(productos in inventariosEmpresa){

precios += inventariosEmpresa[productos].precios * inventariosEmpresa[productos].stock

if(inventariosEmpresa[productos].stock == 0){
    console.log(productos)
}
if(inventariosEmpresa[productos].stock < 5){
    console.log(productos)
}


}

inventariosEmpresa[productosAgregar].stock += stockAumento;
console.log(`este es${productosAgregar}`)
console.log(Object.values(inventariosEmpresa))
console.log(`al producto ${productosAgregar} se le agrego ${stockAumento}`)

console.log(precios);


