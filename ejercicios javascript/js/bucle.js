for(let i = 0; i < 5; i++){
    console.log("valor", + i)
}  

//for objecto 2
const persona = {
    nombre: "Elena",
    edad: 28,
    ciudad: "Bogota"
};

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//for con iterable
const frutas = ["manzana","banana","cereza"];
for(let fruta of frutas){
    console.log(`me gusta la ${fruta}`)
}
