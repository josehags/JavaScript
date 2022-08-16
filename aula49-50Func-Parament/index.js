// //Declaração de função (Function hoisting)
// // pode ser chamada a função antes ou depois de ser criada

// falaOi();
// function falaOi(){
//     console.log('Oie');
// }

// //First-class objects (Objetos de primeira classe)
// //Function expression

// const souUmDado = function(){
//     console.log('Sou um dado.');
// };
// souUmDado();

// // Arrow function

// const funncaoArrow = () => {
//     console.log('Sou uma arrow function')
// };
// funncaoArrow();

// // dentro de um obejto pode ter uma função

// const obj = {
//     falar() {
//         console.log('Estou falando...')
//     }
// };
// obj.falar();



/** Sobre paramentros  */
//  a função com a palavra Function, recebe o arguments. argumentos é o que sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for (let argumento of arguments) {  // o arguments só ser para a function
       total += argumento;
    }
    console.log(total);
}
funcao( 1, 2, 3, 4, 5, 6, 7);