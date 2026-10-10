//diferencia: 

//for in: recorre propiedades/indices
//for of: recorre valores


//for in 


const usuario = {
  nombre : "Ramerlin",
  edad: 18,
}

for (const clave in usuario ){
  console.log(clave, usuario[clave])
}

//for of
const frutas = ["Manaza", "Pera"];

for (const fruta of frutas){
  console.log(fruta)
}



//Array
const autos = ["Toyota", "Honda","BMW", "Hiunday", "Mercedez"];

//indices inician desde 0
console.log(autos[1])
console.log(autos[0])

//tamaño lista
console.log(autos.length)
console.log(autos[0].length)
console.log(autos[autos.length - 1])


let indicelist = autos.length - 1

console.log(autos[indicelist/2])

let mclaren = "Mclaren"
//agregar elemento al final de la lista (push)
autos.push(mclaren)
autos.push("Lambo","Dodge")

console.log(autos) 

//eleminar ultimo elemento (POP)

const eliminado = autos.pop()
console.log(autos)
console.log(eliminado)

//agrega elemento al inicio de la lista (unshift)

console.log(autos.unshift("Dodge"))

console.log(autos)

//elimina el primer elemento de la lista(shift)
console.log(autos.shift())

console.log(autos)

//comprobar si un elemento existe dentro del array (include)

console.log(autos.includes("Lambo"))
const seEncuentra = autos.includes("BWM") 

//Busca la indice de un elemento (IndexOF)
console.log(autos.indexOf("Honda"))

//busca la ultima aparicion de un elemento (lastIndexOf)
autos.push("BMW")
console.log(autos)
console.log(autos.lastIndexOf("BMW"))


//obtiene una parte del array sin modificar el original, indicando inicio y el final de la extraccion (slice)


const autosNuevos = autos.slice(1, 4)
console.log(autosNuevos)
console.log(autos)

//sirve para eliminar, agregar o reemplazar un elemento (splice).
//eliminar 
autos.splice(6,7)

//agregar
autos.splice(1,0, "Corola")

//reemplzar 
autos.splice(1,1, "Bwwwwm")

console.log(autos)