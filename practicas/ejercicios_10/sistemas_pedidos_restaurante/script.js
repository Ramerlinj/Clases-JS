const menu = [
    {
        nombre: "pizza",
        precios: 300,
        disponibilidad: 13
    },
    {
        nombre: "leche",
        precios: 80,
        disponibilidad: 0
    },
    {
        nombre: "olla",
        precios: 200,
        disponibilidad: 12
    }
]

console.log(menu.length)//mostrar productos disponibles

let buscaProductosDisponibles = menu.find(menu => menu.disponibilidad >= 500);
console.log(buscaProductosDisponibles)  //encontrar un producto utitlizando find

let guardarPedidos = [];
let deseaSalir;
let cantidad = 0;
let calculoPedido = 0;
let disponibilidad = false;

do {
    const pedido = prompt(menu.map(menu => `Menu: ${menu.nombre} precio disponible ${menu.precios} disponibilidad de producto ${menu.disponibilidad}`))

    switch (pedido) {
        case "pizzas":
            alert(`Elegiste pizza`)
            const producto = menu.find(menu => menu.nombre == "pizza")
            if (producto) {
                cantidad = Number(prompt(`cual es la cantidad que deseas comprar`))
                if (cantidad <= producto.disponibilidad) {
                    calculoPedido = producto.precios * cantidad;
                    alert(`Usted eligio ${cantidad} pizza su cuenta hace ${calculoPedido}`)
                }
                else {
                    alert(`excediste la cantidad disponible solo nos queda${producto.disponibilidad} eliga una cantidad valida`)
                }

            }
            guardarPedidos.push({
                Nombre: producto.nombre,
                cantidad: cantidad,
                calculo: calculoPedido
            })
            disponibilidad = true
            break;
        case "leche":
            alert(`Elegiste leche`)
            const segundoProducto = menu.find(menu => menu.nombre == "leche")
            if (segundoProducto) {
                cantidad = Number(prompt(`cual es la cantidad que deseas comprar`))
                if (cantidad <= segundoProducto.disponibilidad) {
                    calculoPedido = segundoProducto.precios * cantidad;
                    alert(`Usted eligio ${cantidad}leche su cuenta hace ${calculoPedido}`)
                }
                else if (segundoProducto.disponibilidad == 0) {
                    alert(`Este producto no esta disponible`)
                }
                else {
                    alert(`excediste la cantidad disponible solo nos queda${segundoProducto.disponibilidad} eliga una cantidad valida`)
                }
            }
            guardarPedidos.push({
                Nombre: segundoProducto.nombre,
                cantidad: cantidad,
                calculo: calculoPedido
            })
            disponibilidad = true

            break;


        case "olla":
            alert(`Elegiste olla`)
            const tercerProducto = menu.find(menu => menu.nombre == "olla")
            if (tercerProducto) {
                cantidad = Number(prompt(`cual es la cantidad que deseas comprar`))
                if (cantidad <= tercerProducto.disponibilidad) {
                    calculoPedido = tercerProducto.precios * cantidad;
                    alert(`Usted eligio ${cantidad} olla su cuenta hace ${calculoPedido}`)
                }
                else {
                    alert(`excediste la cantidad disponible solo nos queda${tercerProducto.disponibilidad} eliga una cantidad valida`)
                }
                guardarPedidos.push({
                    Nombre: tercerProducto.nombre,
                    cantidad: cantidad,
                    calculo: calculoPedido
                })
                disponibilidad = true

                break;
            }
        default: alert(`Este producto no existe elija otro que este en nuestra lista de pedidos`)

    }
    if (disponibilidad) {
        let resultados = guardarPedidos.map(p => `${p.Nombre}, y cantidad: ${p.cantidad} y total : ${p.calculo}`)
        alert(resultados)
    }
    deseaSalir = prompt("Desea salir? yes/no")


    if (deseaSalir == "yes") {
        alert(`Gracias por su compra que tenga feliz dia`)

    }


} while (deseaSalir === "no")

if (guardarPedidos.length !== 0) {

    let totalGlobal = guardarPedidos.map(p => p.calculo)
    .reduce((ant, dep) => ant + dep, 0); //investigar que hace el reduce
    let garantia = totalGlobal => 5000 ? totalGlobal * 0.10 : 0
    let total = totalGlobal - garantia;

    alert(`Su total es: ${total}`)
}










