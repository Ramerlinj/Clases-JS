let temperatura = Number(prompt("Cual es la temperatura del motor"))
let presion = Number(prompt("Cual es la presion del motor"))
let fugaGas = confirm("tiene fuga? 1=SI/0=NO")
let ventilacionActiva = confirm("esta encedido el ventilador 1=SI/0=NO")

console.log(fugaGas)
console.log(ventilacionActiva)

if((temperatura > 100 && presion >50) || fugaGas ){
    document.write("ALERTA CRITICA!!")
}
else if(temperatura >80 || presion> 40){
    document.write("ALERTA AMARILLA!!")

}
else if (!ventilacionActiva && temperatura > 60){
    document.write("ALERTA AMARILLA!!")
    
}
else{
    document.write("Sistema Normal")
}
