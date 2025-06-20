const num1 = prompt("Ingresa el primer numero:");
const num2 = prompt("Ingresa el segundo numero:");
const num3 = prompt("Ingresa el tercer numero:");

console.log(num1,num2,num3);

let mayor;
if (num1 >= num2 && num1 >= num3){
    mayor = num1;
}else if (num2 >= num1 && num2 >= num3){
    mayor = num2;
}else if(num3 >= num1 && num3 >= num2){
    mayor = num3;
}

alert("numero mayor: " + mayor);
console.log("numero mayor: " + mayor);