
let paquetes = prompt("Que paquete vas a elegir");
let precio;

switch (paquetes) {
    case "premiun":
        precio = 700;
        alert(`Haz elegido premiun, el precio es:${precio}`)
        document.write("Haz elegido premiun")
        break;


    case "intermedio":
        precio = 500;
        alert(`Haz elegido intermedio, el precio es:${precio}`)
        document.write("Haz elegido intermedio")
        break;

    case "basico":
        precio = 300;
        alert(`Haz elegido basico, el precio es:${precio}`)
        document.write("Haz elegido basico")
}

let precioTotal = precio;

 let tamaño = prompt("Tipo de vehiculo carro o jepeeta?")

 let precioNuevoJeepeta = 200;

 if(tamaño === "jeepeta"){
    alert(`El precio aunmenta con la jeepeta por un recargo fijo por espacio, agua, y shampoo su precio aunmento a: ${precioNuevoJeepeta}, tu total es ${precioTotal = precioNuevoJeepeta + precioTotal}`)

 }
 else if(tamaño === "carro"){
    alert(`El precio es normal con el carro, tu total es ${precioTotal}`)
 }

 let cera = confirm("Quiere cera para el vehiculo: SI o NO")

 let precioCera = 100;
 
 if(cera){
    alert(`El costo aunmeto por la cera a: $100, tu total es ${precioTotal = precioTotal + precioCera}`)
}
else{
    alert(`Sin la cera incluida su precio a pagar seria lo normal con el paquete elegido, su total es: ${precioTotal}`)
}

if(tamaño === "jeepeta" && cera){
    alert(`El costo ha aumentado por la cera, y la jeepeta y tu total a pagar es: ${precioTotal = precioTotal + precioCera + precioNuevoJeepeta}`)
}
else if(tamaño === "jeepeta"){
    alert(`El costo ha aumentado por la jeepeta, y tu total a pagar es: ${precioTotal = precioTotal + precioNuevoJeepeta}`)
}

let descuentos = prompt("Desea aplicar un descuento? SI o NO")
if(descuentos == "no" || descuentos == "NO"){
    alert(`Usted no aplico ningun descuento, su total a pagar es: ${precioTotal}`)
}

else if(descuentos == "lavo10"){
    prompt("Ingrese el codigo de descuento");
    alert(`El descuento es de un 10% y su total a pagar es: ${precioTotal = precioTotal - (precioTotal * 0.10)}`)
   
}   
