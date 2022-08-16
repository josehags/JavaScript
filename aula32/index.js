// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// // console.log(a, b, c);
// //               0   1   2   3   4   5   6   7   8   indice  
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [um, dois, ...resto] = numeros;
// console.log(um, dois);
// console.log(resto); // ...rest, ...spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2])