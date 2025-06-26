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


//CLASES
//1
class Person{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("braian",20,"brian")
let person7 = new Person("david",20,"davi")
console.log(person)
console.log(person7)

//2
class Person2{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("La persona camina")
    }
}

let person10 = new Person2("moure",34,"MoureDev")
console.log(person10)
person10.walk()

//Herencia
class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("El animal emite un sonido generico")
    }
}

class Dog extends Animal{
    sound(){
        console.log("Guau")
    }

    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal{

    constructor(name){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog ("Rocky")
myDog.run()
myDog.sound()

let myFish = new Fish("RockyFish",20)
myFish.swim()
myFish.sound()


//Metodos estaticos 

class MathOperations{
    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,10))