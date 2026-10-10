const seviciosDisponibles = {

    servicio1: {
        espacio: "estandar",
        costo: 150,
        descripcion: "servicio normal con establecimiento trasero por hora."
    },

    servicio2: {
        espacio: "vip",
        costo: 250,
        descripcion: "servicio normal con establecimiento delantero por hora."
    },

    servicio3: {
        espacio: "techado",
        costo: 200,
        descripcion: "servicio normal con establecimiento en techo por hora"
    },

}

let espacioSeleccionado = prompt(`Seleccione el servio o espacio que quiere obtener:  Espacio = 1 ${seviciosDisponibles.servicio1.espacio}
                                                                                      Espacio = 2 ${seviciosDisponibles.servicio2.espacio}
                                                                                      Espacio = 3 ${seviciosDisponibles.servicio3.espacio}`)
let espacios = espacioSeleccionado ? espacioSeleccionado.toLowerCase() : "";

let espacioValido = true;

let costoHoras;

switch (espacios) {
    case seviciosDisponibles.servicio1.espacio:
        alert(`Usted eligio : ${seviciosDisponibles.servicio1.espacio} es: ${seviciosDisponibles.servicio1.descripcion} con un costo por hora de ${seviciosDisponibles.servicio1.costo} `)
        costoHoras = seviciosDisponibles.servicio1.costo;
        document.write("Disfrute la pelicula con un servicio estandar.")
        break;

    case seviciosDisponibles.servicio2.espacio:
        alert(`Usted eligio : ${seviciosDisponibles.servicio2.espacio} es: ${seviciosDisponibles.servicio2.descripcion} con un costo por hora de ${seviciosDisponibles.servicio2.costo} `)
        costoHoras = seviciosDisponibles.servicio2.costo;
        document.write("Disfrute la pelicula con un servicio VIP.")
        break;

    case seviciosDisponibles.servicio3.espacio:
        alert(`Usted eligio : ${seviciosDisponibles.servicio3.espacio} es: ${seviciosDisponibles.servicio3.descripcion} con un costo por hora de${seviciosDisponibles.servicio3.costo} `)
        costoHoras = seviciosDisponibles.servicio3.costo;
        document.write("Disfrute la pelicula con un servicio techado.")
        break;

    default:
        alert("Su seleccion no ha cumplido ni seleccionado nada, intentar de nuevo.")
        seleccionValida = false;
        break;
}

let costoHorasUsuario = Number(prompt("Introduce la cantidad de horas que va a durar ?"))

let totalcostoHoras = costoHorasUsuario * costoHoras;

alert(`Su tarifa a pagar es ${totalcostoHoras}`)


let tipoVehiculo = prompt(`Seleccione el tipo de vehiculo que va a ingresar: Motocicleta o Automovil`)

let motocicletaDescuento = 0.50;

if (tipoVehiculo == "Motocicleta" || tipoVehiculo == "motocicleta" || tipoVehiculo == "1") {
    alert(`Usted eligio Motocicleta con un descuento de ${motocicletaDescuento} su total a pagar es: ${totalcostoHoras - (totalcostoHoras * motocicletaDescuento)}`)
}

let recargoFijo = 100;

if (tipoVehiculo == "Automovil" || tipoVehiculo == "automovil" || tipoVehiculo == "2") {
    alert(`Usted eligio Automovil con un recargo fijo de ${recargoFijo} su total a pagar es: ${totalcostoHoras + recargoFijo}`)
}


let comboCine = prompt(`Desea agregar el combo de cine (palomitas gigantes + refresco) por un monto extra fijo de RD$350.  SI o NO`)

let comboCineFijo = 350;

if (comboCine == "SI" || comboCine == "si" || comboCine == "1") {
    alert(`Usted eligio agregar el combo de cine con un costo fijo de ${comboCineFijo} su total a pagar es: ${totalcostoHoras + comboCineFijo}`)
}

//Menbrecias y descuentos



let membresia = prompt(`Agrege la menbresia para obtener un descuento si posee una membresia de cine.  SI o NO`)

let descuentoMembresia = 0.15;

if (membresia == "SI" || membresia == "si") {
    let codigoMembresia = prompt(`Ingrese el codigo de membresia para obtener el descuento de clientes preferidos`)

    if (codigoMembresia == "CINECLUB" || codigoMembresia == "cineclub") {
        alert(`Usted eligio la membresia CINECLUB con un descuento de ${descuentoMembresia} su total a pagar es: ${totalcostoHoras - (totalcostoHoras * descuentoMembresia)}`)
    }
    else if (codigoMembresia == "NOCTURNO" || codigoMembresia == "nocturno") {
        let descuentoNocturno = 0.25;
        alert(`Usted eligio la membresia NOCTURNO con un descuento de ${descuentoNocturno} su total a pagar es: ${totalcostoHoras - (totalcostoHoras * descuentoNocturno)}`)
    }
    else {
        alert(`El codigo ingresado no es valido, no se aplicara ningun descuento.`)
    }

    
}
else{
    alert(`Usted eligio no agregar la membresia, su total a pagar es: ${totalcostoHoras}`)
}


// codigo validacion

let montoPago = parseFloat(prompt("Ingrese el monto con el que va a pagar:"));

if(montoPago < totalcostoHoras) {
    alert(`El monto ingresado es insuficiente. Total a pagar: ${totalcostoHoras}, Monto ingresado: ${montoPago}, Falta: ${totalcostoHoras - montoPago}`);
}
else if (montoPago == false) {
    alert("No se ingresó un monto válido. Por favor, ingrese un número positivo.");
}

while(montoPago == false || montoPago < totalcostoHoras) {
    alert("No se ingresó un monto suficiente. Por favor, ingrese un número positivo.");
    montoPago = parseFloat(prompt("Ingrese el monto con el que va a pagar:"));
}

let cambio = montoPago - totalcostoHoras;
alert(`Pago exitoso. Total a pagar: ${totalcostoHoras}, Monto ingresado: ${montoPago}, Cambio a devolver: ${cambio}`);

