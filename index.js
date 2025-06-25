const person1 = {
    name: "David",
    age: 40,
    alias: "davi"
}

//acceder a las propiedades

console.log(person1.name)

console.log(person1["name"])

person1.name = "Braian"

person1.edad = "23"

//tipo de dato
console.log(typeof person1.age)

//eliminar propiedades
delete person1.age

//añadir propiedades
person1.email = "123456789@gmail.com"

//metodos
const person2 = {
    name: "Braian",
    age:20,
    alias: "brian",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

//anidacion de objetos
let person3 = {
    name: "braian",
    age: 20,
    alias: "brian",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Development",
        exp: 1,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}
console.log(person3)

//Igualdad de objetos
let person4 = {
    name: "braian",
    age: 20,
    alias: "brian",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Development",
        exp: 1,
        work: function(){
            console.log(`La ${this.name} persona trabaja`)
        }
    }
}
person4.job.work()

//iteracion

for(let key in person4){
    console.log(`${key}: ${person4[key]}`)
}

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log("Hello")
    }
}

const person6 = new Person("Cardona", 23)
person6.sayHello()
console.log(person6)