// const _velocidade = Symbol ('_velociadade')
// class Carro {
//      constructor (nome){
//         this.nome = nome;
//         this[_velocidade] = 0;
//      }

//      set velocidade(valor) {
//         console.log('SETER');
//         if (typeof valor !== 'number') return;
//         if (valor >= 100 || valor <= 0) return;
//         this[_velocidade] = valor;
//      }

//      get velocidade () {
//         console.log('GETTER');
//         return this[_velocidade];
//      }

//      acelerar () {
//         if (this[_velocidade]>= 100) return;
//         this[_velocidade]++;
//     }

//     freiar () {
//         if (this[_velocidade] <= 0 ) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro ('Fuscão');
// c1.velocidade = 99;
// console.log(c1.velocidade);



//forma mais simples
class Pessoa {
     constructor( nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
     }

     get nomeCompleto () {
        return this.nome + ' ' + this.sobrenome;
     }
     
     set nomeCompleto (valor ){
        valor = valor.split (' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
     }
}

const p1 = new Pessoa('José', 'Henrique');
p1.nomeCompleto = 'José Henrique Guedes'
console.log(p1.nomeCompleto); // função 

console.log(p1.nome, p1.sobrenome);