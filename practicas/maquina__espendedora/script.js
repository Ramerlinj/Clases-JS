

const maquinaEspendedora = {
    cocacola: {
        price: 12,
        cantida: 100,
        nombre: "cocacola"
    },

    chocolate: {
        price: 12,
        cantida: 70,
        nombre: "chocolate"
    },
    Jugo: {
        price: 16,
        cantida: 80,
        nombre: "jugo"
    },
    galletas: {
        price: 12,
        cantida: 70,
        nombre: "galletas"
    }
}
let = NombreProducto = prompt(`${maquinaEspendedora.cocacola.nombre} cadidad ${maquinaEspendedora.cocacola.cantida} prince ${maquinaEspendedora.cocacola.price}
                               ${maquinaEspendedora.chocolate.nombre} cadidad ${maquinaEspendedora.chocolate.cantida} prince ${maquinaEspendedora.chocolate.price}
                               ${maquinaEspendedora.Jugo.nombre} cadidad ${maquinaEspendedora.Jugo.cantida} prince ${maquinaEspendedora.Jugo.price}
                               ${maquinaEspendedora.galletas.nombre} cadidad ${maquinaEspendedora.galletas.cantida} prince ${maquinaEspendedora.galletas.price}
                               :Elija el producto que deseas`);
let preciomasproducto;

switch (NombreProducto) {

    case maquinaEspendedora.cocacola.nombre:
        alert(`El precio es:${maquinaEspendedora.cocacola.price}`)
        preciomasproducto = ` ${maquinaEspendedora.cocacola.price}`
        break;
    case maquinaEspendedora.chocolate.nombre:
        alert(`El precio es:${maquinaEspendedora.chocolate.price}`)
        preciomasproducto = `${maquinaEspendedora.chocolate.price}`
        break;
    case maquinaEspendedora.Jugo.nombre:
        alert(`El precio es:${maquinaEspendedora.Jugo.price}`)
        preciomasproducto = `${maquinaEspendedora.Jugo.price}`
        break;
    case maquinaEspendedora.galletas.nombre:
        alert(`El precio es:${maquinaEspendedora.galletas.price}`)
        preciomasproducto = `${maquinaEspendedora.galletas.price}`
        break;
}

let = cUpones = prompt("introduzca el cupon que posee");

let descuento = preciomasproducto * 0.10;
if (cUpones === "rosanna") {
    alert(`usted tiene un 10% de descuento, su total a pagar es: ${preciomasproducto - descuento}`)
}
else{
    alert(`cupon incorrecto toatal a pagar ${preciomasproducto}`)
}
