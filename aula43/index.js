
/*   * Escreva uma fução que receba um número e retorne o seguinte
     * Numero é divisivel por 3 = Fizz
     * Numero é divisivel por 5 = Buzz
     * Numero é divisivel por 3  e 5 = FizzBuzz
     * Número NÂO é divisivel por 3 e 5 = retorna o próprio número
     * checar se o número é realmente um número = retornar o próprio número
     * Use a função com números de 0 a 100 
*/
function fizzBuzz (numero){
        if(typeof numero !== 'number') return numero;
        if (numero  % 3 ===0 && numero % 5 ===0 ) return 'FizzBuzz'; // essa checagem precisa estar no topo
        if (numero % 3 ===0 ) return 'Fizz';
        if (numero % 5 ===0 ) return 'Buzz';
        return numero;
    }
    for (let i=0; i < 100; i++) {
        console.log(i, fizzBuzz(i));
    }
    