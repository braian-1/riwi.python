class persona{
    
    altura;
    Peso;
    edad;
    genero;

    constructor(peso){
        this.peso=peso;
    }
    
    definirAltura(altura){
        this.altura=altura;
    }

    comer(){
        console.log("comer");
    }

    correr(){
        console.log("correr");
    }

    mostrarAltura(){
        console.log(this.altura);
    }

    mostrarPeso(){
        console.log(this.peso);
    }
}

const persona1 = new Persona(18);
persona1.mostrarPeso();
persona1.definirAltura(1.75);
persona1.mostrarAltura();
const persona2 = new PErsona(50);
persona2.definirAltura(2.15);
persona2.mostrarAltura();