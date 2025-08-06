//Codigo sincrono
console.log("Inicio")

for (let i = 0; i < 100000000; i++){ }

console.log("Fin")

//event looop (bucle de eventos)

//Componentes del event loop
//- call stack (pila de ejecucion)
//- web APIs (APIs del navegador) o node.js: setTimeout()...
//- task Queue (cola de tareas) y microtaskQueue

//Flujo del event loop:
// Callstak
// Operaciones asincronas -> web APIs o node.js
// Operacion termina -> la coloca en task Queue o microstask Queue
// Si call task vacio -> Mueve tareas del microtask Queue o task Queue al call task

//codigo asincrono
//-- callbacks
//el setTimeout simula asincronia
console.log("Inicio")
setTimeout(() => {
    console.log("Esto se ejecuta")
})
console.log("Fin")

//Problema: Callback Hell
function step1(callback){
    setTimeout(() => {
        console.log("paso 1 completado")
        callback()
    }, 1000)
}

step1(() => {
    console.log("Todos los pasos completados")
})

function step2(callback){
    setTimeout(() => {
        console.log("paso 2 completado")
        callback()
    }, 1000)
};


function step3(callback){
    setTimeout(() => {
        console.log("paso 3 completado")
        callback()
    }, 1000)
}


step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})


//Promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok){
            resolve("Operacion exitosa")
        }else{
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
     console.log(error)
    })    




































//Callbacks
function processData(data, callback){
    const result = sum(...data)
    callback(result)
}

function processResult(element){
    console.log(element)
}

function processResult2(element){
    console.log(`mi resultado es ${element}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (element) => {
    console.log(`mi resultado en la arrow function es ${element}`)
})



