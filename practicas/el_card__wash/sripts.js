
let paquetes = prompt("Que paquete vas a elegir");
let precio;

switch (paquetes) {
    case "premiun":
        precio = 700;
        alert(`El precio es:${precio}`)
        document.write("Haz elegido premiun")
        break;


    case "intermedio":
        precio = 500;
        alert(`El precio es:${precio}`)
        document.write("Haz elegido intermedio")
        break;

    case "basico":
        precio = 300;
        alert(`El precio es:${precio}`)
        document.write("Haz elegido basico")
}

 let tamaño = prompt("Tipo de vehiculo carro o jepeeta?")

 let precioNuevo = 200;

 if(tamaño === "jeepeta"){
    alert(`El precio aunmenta con la jeepeta a: ${precio = precioNuevo + precio}`)

 }

 let cera = confirm("Quiere cera para el vehiculo: SI o NO")
 
 if(cera === true){
    alert(`El costo aunmeto por la cera, tu total es ${precio = 100 + precio}`)
}
else{
    alert(`sin la cera incluida su precio a pagar seria lo normal`)
}

if(tamaño === cera === true){
    alert(`El costo ha aumentado por la cera, y tu talta a pagar es: ${precio =  cera + precioNuevo + precio}`)
}
else{
    alert("")
}
