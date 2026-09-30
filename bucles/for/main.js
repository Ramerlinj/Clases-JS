let edad = 18;

// for (inicia; condicion; icrementador){

// }\

let suma=0;
for (let i =1; i <= 5;i++){
    suma += i;
}

// document.write(suma)


// const tabla = 9;

// for (let i =1; i <=12; i++){
//     let result = tabla * i;
//     document.write(`${tabla} x ${i} = ${result} <br/>`)

// }


// for of

const frutas = ['manzana', "pera", 'Mango', 'KIWI', "Fresa"]

for(const f of frutas){
    document.write(f + "<br/>")
    if(f == "pera"){
        document.write("La pera no me gusta nada <br/>")
    }
    else if(f == "manzana"){
        document.write("la manzana no me gusta nada <br/>")
    }

}

