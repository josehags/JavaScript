const pessoas = [
    { id: 3, nome: 'Luciana'},
    { id: 2, nome: 'Rayane'},
    { id: 1, nome: 'José'},

];


const novasPessoas = new Map();
for (const pessoa of pessoas ) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

// console.log(novasPessoas);

// //console.log(novasPessoas.get(2)); //retorna a pessoa 2



// for (const pessoa of novasPessoas) {
//     console.log(pessoa); // retorna um array 
// }