const estudiante = {

    nombre: "pedro",
    edad: 10,
    materias: [
        {
            nombre: "sociales",
            calificacion: 100
            
        },
        {
            nombre: "Naturales",
            calificacion: 90

        },
        {
            nombre: "Matematicas",
            calificacion: 70

        },
        {
            nombre: "Español",
            calificacion: 60

        }
    ]

}

let calificacionMaAlta = estudiante.materias[1]

let contador = 0;

for(const m of estudiante.materias){ //el "OF" es para iterar listas y el "IN" es para iterar objectos

    console.log(`${m.calificacion}`)
    if(m.calificacion > calificacionMaAlta.calificacion){
        calificacionMaAlta = m
        console.log(`calificacion mas alta es ${calificacionMaAlta.nombre}`)
    }
    if(m.calificacion >= 90){
        contador ++;
    }

    
    
}
const sumaTotal = estudiante.materias.reduce((acumulador,m) => {return acumulador + m.calificacion}, 0)

const promedio = Number(sumaTotal / estudiante.materias.length);
console.log(`promedio ${promedio}`)


const estado = promedio>= 70? "aprobado" : "reprobado"; console.log(`${estado}`)

console.log(`marias excelentes son: ${contador}`)
    
