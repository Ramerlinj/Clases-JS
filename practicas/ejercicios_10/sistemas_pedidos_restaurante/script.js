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
let descuento;
let cantidad = 0;
let calculoPedido = 0;

do {
    const pedido = prompt(menu.map(menu => `Menu: ${menu.nombre} precio disponible ${menu.precios} disponibilidad de producto ${menu.disponibilidad}`))

    switch (pedido.toLowerCase()) {
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
                cantidad: producto.cantidad,
                calculo: producto.calculoPedido
            })

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
                cantidad: segundoProducto.cantidad,
                calculo: segundoProducto.calculoPedido
            })
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
                    cantidad: tercerProducto.cantidad,
                    calculo: tercerProducto.calculoPedido
                })
                break;
            }
        default: alert(`Este producto no existe elija otro que este en nuestra lista de pedidos`)

    }

    let resultados = guardarPedidos.map(p => `${p.Nombre}, ${p.cantidad}`)
    alert(resultados)
    deseaSalir = prompt("Desea salir? yes/no")


    if (deseaSalir == "yes") {
        alert(`Gracias por su compra que tenga feliz dia`)

    }


} while (deseaSalir === "no")










