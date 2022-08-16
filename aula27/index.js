
// operação ternaria
//(condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';


const corUsuario = 'Pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);





// if (pontuacaoUsuario>= 100){
//     console.log('Usuário vip');
// } else {
//     console.log('Usuario normal');
// }