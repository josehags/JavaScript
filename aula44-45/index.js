// function soma (x, y){
//     if ( typeof x !== 'number' || typeof y !== 'number'){ // checando se é um numbers
//         throw new Error('x e y precisam ser números.'); // lancando erros
//     }
//     return x + y;
// }

// try { // capturando o error
//     console.log(soma(1,2)); ros
// } catch(error){
//     console.log(error); 
//     console.log('Alguma coisa mais amigável pro usuário.');
// }

// try{
//     //É esecutada quando não há erros
// }catch{
//     // É executada quando há erros
// } finally{
//     //Sempre é executado
// }


function retornaHora(data){
    if (data && !(data instanceof Date)){ //instanciano data
        throw new TypeError('Esperando instância de Date. ');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
 // tratar erro
} finally {
    console.log('Tenha um bom dia. ')
}
