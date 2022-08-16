// como colocar no data 
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();
// função para mostrar o dia 

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-Feira','Terça-Feira', 'Quarta-Feira',
                         'Quinta-Feira', 'Sexta-Feira', 'Sábado'  ];
     return diasSemana[diaSemana];
    }


// função para mostra o mês
function getNomeMes(numeroMes) {
    const meses = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
                   'outubro', 'novembro','dezembro' ];
            return meses[numeroMes];
    }
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
        ` de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}` 
    );
}

 h1.innerHTML = criaData(data); 
// 
 //segunda forma de fazer 

//  const h1 = document.querySelector('.container h1');
//  const data = new Date();
//  const opcoes = {
//      dateStyle: 'full',
//      //timeStyle: 'short' // sempre que ativa o time, n funciona as horas
//  };
//  h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

// //  terceira forma de fazer
// //  const h1 = document.querySelector('.container h1');
// //  const data = new Date();
// //  h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); // timeStyle não esta funcionado

