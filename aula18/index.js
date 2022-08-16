/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade:55
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); 

function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa ('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa ('Maria', 'Oliveira', 44);
const pessoa3 = criaPessoa ('joão', 'Gomes', 55);
const pessoa4 = criaPessoa ('junior', 'Moreira', 65);
const pessoa5 = criaPessoa ('Isadora', 'Freitas', 23);

console.log(pessoa1.nome, pessoa2.nome); */


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementoIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementoIdade();
pessoa.fala();
pessoa.incrementoIdade();
pessoa.fala();
pessoa.incrementoIdade();