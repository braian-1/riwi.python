const esCapicua = numero => String(numero) === String(numero).split('').reverse().join('');

const num = prompt("Ingresa un numero:");
const parsedNum = parseInt(num);

isNaN(parsedNum)
    ? alert("Entrada no valida. Por favor, Ingrese un numero.")
    : alert(`El numero ${parsedNum} ${esCapicua(parsedNum) ? 'Si' : 'No'} es capicua.`)