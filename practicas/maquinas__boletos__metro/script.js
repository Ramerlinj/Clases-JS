
const paquetes = {

    primerAzOna: {
        nOmbre: "zona1",
        clase: "regular",
        precio: 300,
        descuento: 0.01,
    },

    seGundaZona: {
        nOmbre: "zona2",
        clase: "estudiantil",
        precio: 600,
        descuento: 0.20
    },

    terceraZona: {
        nOmbre: "zona3",
        clase: "adultomayor",
        precio: 200,
        descuento: 0.30
    },

    descuentoBoletos: {
        primerDescuento: 0.10,
        segundoDescuento: 0.15,
    },

    subtiques: {
        precio: 20
    }

}

let zOnasSeleccionada = prompt(`Selecciona la zona que desee: 1: ${paquetes.primerAzOna.nOmbre}
                                                    2: ${paquetes.seGundaZona.nOmbre}
                                                    3: ${paquetes.terceraZona.nOmbre}`);

let zonas = zOnasSeleccionada ? zOnasSeleccionada.toLowerCase() : "";

let seleccionValida = true;
let totalPagarZona = 0;

switch (zonas) {
    case paquetes.primerAzOna.nOmbre:
        alert(`Usted eligio ${paquetes.primerAzOna.nOmbre}con la clase ${paquetes.primerAzOna.clase} con un totalPagarZona sin descuento de ${paquetes.primerAzOna.precio}`)
        alert(`Con el descuento aplicado su totalPagarZona a pagar es:  ${totalPagarZona = paquetes.primerAzOna.precio - (paquetes.primerAzOna.precio * paquetes.primerAzOna.descuento)}`)
        document.write("Disfrute su viaje con su paquete recargado para un viaje regular.")
        break;

    case paquetes.seGundaZona.nOmbre:
        alert(`Usted eligio ${paquetes.seGundaZona.nOmbre}con la clase ${paquetes.seGundaZona.clase} con un totalPagarZona sin descuento de ${paquetes.seGundaZona.precio}`)
        alert(`Con el descuento aplicado su totalPagarZona a pagar es:  ${totalPagarZona = paquetes.seGundaZona.precio - (paquetes.seGundaZona.precio * paquetes.seGundaZona.descuento)}`)
        break;

    case paquetes.terceraZona.nOmbre:
        alert(`Usted eligio ${paquetes.terceraZona.nOmbre}con la clase ${paquetes.terceraZona.clase} con un totalPagarZona sin descuento de ${paquetes.terceraZona.precio}`)
        alert(`Con el descuento aplicado su totalPagarZona a pagar es:  ${totalPagarZona =  paquetes.terceraZona.precio - (paquetes.terceraZona.precio * paquetes.terceraZona.descuento)}`)
        document.write("Disfrute su viaje con su paquete recargado para adultos mayores.")
        break;

    default:
        alert("Seleccion no valida, inserctar una opcion.")
        seleccionValida = false;
        break;
}

let tiques = prompt("Cuantos tiquetes eliges ?");

let totalTodo = totalPagarZona;

if(tiques < 10){

    alert(`Total a pagar es : ${totalTodo + (paquetes.subtiques.precio * tiques)}`)
    
    alert(`Usted no califica para el descuento por la cantidad del tique eligido.`)
}

// else if(tiques >= 10 && tiques < 15){
//        let totalPagarTiques = (tiques * paquetes.subtiques.precio)
//     alert(`Total a pagar es : ${totalPagarZona - (totalPagarZona * paquetes.descuentoBoletos.segundoDescuento) + totalPagarTiques + totalPagarTiques - (totalPagarTiques * 0.10)}`)
    
// }
// else if(tiques > 14){
//     let totalTiques;
//     alert(`Su total a pagar es: ${totalTiques - (totalPagarZona * paquetes.descuentoBoletos.segundoDescuento) + paquetes.subtiques.precio - (totalPagarZona * paquetes.descuentoBoletos.segundoDescuento)}`)
// }

// else{
//     alert(`Usted no cumple con el requisito intentelo despues.`)
// }

 




/*Permite seleccionar una zona de destino (zona1, zona2, zona3).
Verifica la categoría de pasajero (regular (10%) , estudiante (20%), adultomayor (30%)) aplicando descuentos por ley.
Permite elegir la cantidad de viajes que desee, (si elige 5 entra un descuento del 5% y si es 10 un descuento del 10%)  para multiplicar el monto antes de cobrar.
si en algún momento del programa el usuario introduce un valor incorrecto le cierre el cierre el programa sin que le salgan las demás funciones.
*/