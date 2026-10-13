
const alimentos = ["tomates", "pepino", "brocoli", "calabaza", "peregil", "aguacate", "legunbre", "carrot"];


alimentos.push("leche", "banana")

for (const a of alimentos) {
    console.log(`${a}`)
}

const eliminar = alimentos.pop()

console.log(`Eliminamos en esta ocacion a: ${eliminar}`)

for (const a of alimentos){
    console.log(`${a}`)
}


//comprobar si existe leche
console.log(alimentos.includes("leche"))
const seEncuenta = alimentos.includes("leche")


//contar cuantos productos tiene la lista

console.log(alimentos.length)


    if(alimentos.length == 0){
        console.log(`Esta lista de productos esta vacia`) //mostrar un mensaje si la lista esta vacia
    }
    else{
        console.log("tiene caracteres")
    }
    


