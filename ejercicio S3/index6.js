function Triangulo(filas){
    for (let i = 1; i <= filas; i++){
        let fila ='';
        for (let j = 1; j <= filas - i; j++){
            fila += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++){
            fila +='*';
        }
        console.log(fila);
    }
}

Triangulo(5);