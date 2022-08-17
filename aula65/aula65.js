// filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos

// retornar números maiores que 10

const numeros = [ 5, 50 , 65, 40, 80, 90, 1, 2, 3, 4, 5, 6, 7];
const numerosFiltrados =  numeros.filter( valor => valor > 50);
    console.log('Retornar números maiores que 10');
    console.log('');
    console.log(numerosFiltrados);
    console.log('');


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra "a"

const pessoas = [
    { nome: 'Luiz', idade:62 },
    { nome: 'Maria', idade:23 },
    { nome: 'Elis', idade:39 },
    { nome: 'José', idade:26 },
    { nome: 'Isadora', idade:20 },
    { nome: 'Gabriela', idade:22 }
];

const pessoasNomeGrande = pessoas.filter( obj => obj.nome.length >= 5 );
const pessoasIdadeCiquentaAnos = pessoas.filter( obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter( obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log('------------------------------------------------------');
console.log('Retorne as pessoas que tem o nome com 5 letras ou mais')
console.log(pessoasNomeGrande);
console.log('');
console.log('-----------------------------------------');

console.log(' Retorne as pessoas com mais de 50 anos');
console.log(pessoasIdadeCiquentaAnos);
console.log('');

console.log('-----------------------------------------------------');
console.log('Retorne as pessoas cujo nome termina com a letra "a"');
console.log(nomeTerminaComA);
console.log('');


