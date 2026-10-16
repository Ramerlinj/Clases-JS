const productos = [

   {
        paraPelo: "shamppo",
        precio: 300,
        cantidad: 20
        
    },
    {
        paraPelo: "acondicionador",
        precio: 500,
        cantidad: 100
    },
    {
        paraPelo: "acondicionador",
        precio: 700,
        cantidad: 30
    }
]





for(const productosVendidos of productos){
    console.log(productosVendidos)

};


const cantidadTotal = productos.reduce((acumulador, productos) => {return acumulador + productos.cantidad * productos.precio}, 0);

const unidadesTotal = productos.reduce((acumulador, productos) => {return acumulador + productos.cantidad}, 0);



console.log(`Esta fue la unidad vendida${unidadesTotal}`);
console.log(`Esta fue la cantidad${cantidadTotal}`);

let ingresoPromedio = cantidadTotal * unidadesTotal;
console.log(`Este fue el ingreso promedio${ingresoPromedio}`);



const estados = ingresoPromedio>= 50000? "Excelente jornada de ventas" : "Debemos mejorar las ventas"; console.log(estados)

// *Enunciado: Sistema de ventas de una tienda*

// Nivel: Intermedio

// Conceptos: reduce(),
//  arrays, objetos, operadores y condicionales. 

// Objetivo
// Tienes un array de productos vendidos en una tienda. Debes utilizar el método reduce() para calcular un resumen de las ventas.


// *Requisitos*

// Utiliza reduce() para calcular el valor total de todas las ventas. Recuerda que cada venta se calcula multiplicando precio * cantidad.

// Calcula cuántas unidades de productos se vendieron en total.

// Determina cuál fue el ingreso promedio por unidad vendida.

// Si los ingresos totales superan los RD$50,000, muestra "¡Excelente jornada de ventas!". De lo contrario, muestra "Debemos mejorar las ventas".

// Imprime todos los resultados en la consola.