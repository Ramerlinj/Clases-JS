//? 1 Car Wash

//? Un cliente llega a un túnel de lavado automático. Debe:
//? Elegir un paquete de lavado (basico, intermedio, premium) con un switch.
//? Indicar el tamaño del vehículo (carro o Jeepeta ), donde los jeepeta pagan un recargo fijo por mayor uso de agua/champú.
//? Decidir si añade cera líquida adicional con un costo extra.
//? Ingresar el dinero en efectivo con el que va a pagar y calcular si le alcanza, si le falta o cuánto le sobra de cambio.
//? Implementar cupones de descuento, 10% si el codigo es “Lavo10” y 30% si el codigo es “Nolavoencasa”


const serviciosLavados = {
    basico: {
        nombre: "basico",
        precio: 100,
        descripcion: "Lavado exterior e interior, aspirado y secado"
    },
    intermedio: {
        nombre: "intermedio",
        precio: 150,
        descripcion: "Lavado exterior e interior, aspirado, secado y encerado"
    },
    premium: {
        nombre: "premium",
        precio: 200,
        descripcion: "Lavado completo con todos los servicios incluyendo cera líquida"
    },
    extra: {
        Recargojeepeta: 100,
        cera: 50
    }
}

let paqueteSeleccionado = prompt(`Seleccione un paquete de lavado:
1. ${serviciosLavados.basico.nombre} - Precio: ${serviciosLavados.basico.precio} - Descripción: ${serviciosLavados.basico.descripcion}
2. ${serviciosLavados.intermedio.nombre} - Precio: ${serviciosLavados.intermedio.precio} - Descripción: ${serviciosLavados.intermedio.descripcion}
3. ${serviciosLavados.premium.nombre} - Precio: ${serviciosLavados.premium.precio} - Descripción: ${serviciosLavados.premium.descripcion}`);

// Esta expresión condicional comprueba si el usuario escribió una opción.
// Si existe, la convierte a minúsculas; si canceló o dejó vacío el prompt,
// asigna una cadena vacía para evitar errores.
let paquete = paqueteSeleccionado ? paqueteSeleccionado.toLowerCase() : "";
let subtotal = 0;
let ordenValida = true;

switch (paquete) {

    case serviciosLavados.basico.nombre:
        alert(`Ha seleccionado el paquete ${serviciosLavados.basico.nombre} con un precio de ${serviciosLavados.basico.precio}`);
        subtotal = serviciosLavados.basico.precio;
        break;

    case serviciosLavados.intermedio.nombre:
        alert(`Ha seleccionado el paquete ${serviciosLavados.intermedio.nombre} con un precio de ${serviciosLavados.intermedio.precio}`);
        subtotal = serviciosLavados.intermedio.precio;
        break;

    case serviciosLavados.premium.nombre:
        alert(`Ha seleccionado el paquete ${serviciosLavados.premium.nombre} con un precio de ${serviciosLavados.premium.precio}`);
        subtotal = serviciosLavados.premium.precio;
        break;
        
    default:
        alert("Opción no válida. Por favor, seleccione un paquete válido.");
        ordenValida = false;
        break;
}

if (ordenValida) {

    let tipoVehiculo = prompt("Ingrese el tipo de vehículo (carro o jeepeta):").toLowerCase();
    tipoVehiculo = tipoVehiculo ? tipoVehiculo : "";

    if (tipoVehiculo === "jeepeta") {
        subtotal += serviciosLavados.extra.Recargojeepeta;
        alert(`Se ha aplicado un recargo de ${serviciosLavados.extra.Recargojeepeta} por ser una jeepeta. Subtotal: ${subtotal}`);
    }
    else if (tipoVehiculo === "carro") {
        alert("Su vehículo es un carro, no se aplicará recargo. Subtotal: " + subtotal);
    }
    else{
        alert("Tipo de vehículo no válido. Por favor, ingrese 'carro' o 'jeepeta'.");
        ordenValida = false; //??????
    }

    if (ordenValida) {
        let deseaCera = prompt("¿Desea añadir cera líquida adicional por un costo extra de " + serviciosLavados.extra.cera + "? (si/no)").toLowerCase();
        deseaCera = deseaCera ? deseaCera : "";

        if (deseaCera === "si") {
            subtotal += serviciosLavados.extra.cera;
            alert(`Se ha añadido cera líquida. Subtotal: ${subtotal}`);
        }
        else if (deseaCera === "no") {
            alert("No se añadirá cera líquida. Subtotal: " + subtotal);
        }
        else{
            alert("Opción no válida para cera líquida. Por favor, responda 'si' o 'no'.");
            ordenValida = false; //??????
        }
    }
    
    if (ordenValida) {

        let cupon = prompt("Ingrese un cupón de descuento (Lavo10 para 10% o Nolavoencasa para 30%):").toLowerCase();
        
        let totalServicio = subtotal;

        if (cupon === "lavo10"){
            totalServicio -= subtotal * 0.10
            alert("Se aplico un descuento del 10%. Su total a pagar es: " + totalServicio)

        }
        else if (cupon === "nolavoencasa"){
            totalServicio -= subtotal * 0.30
            alert("Se aplico un descuento del 30%. Su total a pagar es: " + totalServicio)
        }
        else{
            alert("cupon no valido. total a pagar: " + totalServicio )
        }

        let dineroIngresado = parseFloat(prompt("Ingrese el dinero en efectivo con el que va a pagar:"));
        if (dineroIngresado < totalServicio) {
            alert(`Le falta dinero. total: ${totalServicio}, Dinero ingresado: ${dineroIngresado}, Falta: ${totalServicio - dineroIngresado}`);
        }
        else {
            let cambio = dineroIngresado - totalServicio;    
            alert(`Pago aceptado. total: ${totalServicio}, Dinero ingresado: ${dineroIngresado}, Cambio: ${cambio}`);
        }
    }
}
