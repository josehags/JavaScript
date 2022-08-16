let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0


num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// conversão de number para string 
// num1 = num1.toString
//console.log (num1.toString + num2);
//console.log(num1.toFixed(2)); colocando 2 casas decimais 
//console.log(Number.isInteger(num1)); conserindo se o numero é interio

