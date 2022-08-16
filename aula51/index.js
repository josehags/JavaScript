// return de funções
//retotna m valor 
function criaMultiplicador (multiplicador) {
    return function (n) { // retornanod outra função
        returnn * multiplicador;
    };
}

const duplicar = criaMultiplicador(2);
const triplicar = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplicar(2));
console.log(triplicar(2)); // executando dunção 
console.log(quadriplica(2));