const persona = {
    nombre: "Cardona",
    edad: 25,
    altura: 1.76
}

console.log(persona)

persona.email = "Car1224343@gmail.com"

delete persona.nombre

const persona1 = {
    nombre: "Cardona",
    edad: 34,
    altura: 1.65,
    walk: function(){
        console.log("la Persona corre")
    }
}

persona1.walk()

for (let key in persona){
    console.log(`${key}: ${persona[key]}`)
}