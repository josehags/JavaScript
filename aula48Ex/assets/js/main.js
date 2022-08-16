const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

/** Criando o <li></li>  **/
function criaLi(){ // criadando lista de tarefas no (li)
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){ // pegando a tecla enter ao clicar 
    if (e.keyCode === 13){
        if (!inputTarefa.value) return; // checando se o input não está vazio 
        criaTarefa(inputTarefa.value); // se o input tiver algum valor, sera criado um tarefa
    }
});



/** Limpa o input  **/
function limpaInput(){
    inputTarefa.value = ''; // limpando valor no input
    inputTarefa.focus(); // coloca o cursor no input e deixa piscando na caixa de texto 
}


/** Botão apagar  **/
function criaBotaoApagar(li){
    li.innerText += ' '; // colocando um espaço do texto
    const botaoApagar = document.createElement('button'); // crinando botão
    botaoApagar.innerHTML = 'Apagar'; // colocando a função no html
    botaoApagar.setAttribute('class', 'apagar'); // setando um atributo, o button no htl  recebe uma class Apagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // criando o titulo pata o button 

    li.appendChild(botaoApagar); // adicionado botão apagar
}


/** Cria as tarefas tarefas digitada pelo usúario  **/

function criaTarefa(textoInput){ //criando tarefas
    const li = criaLi(); // 
    li.innerText = textoInput;
    tarefas.appendChild(li); // caputurando frases na ul 
    limpaInput();  // chamado função criada
    criaBotaoApagar(li); // chamado função criada
    salvarTarefas(); // chamado função criada
};

/** ************  **/

btnTarefa.addEventListener('click', function(){ // pegando valor no input, e deixando sem captura o input em branco
 if (!inputTarefa.value) return;
 criaTarefa(inputTarefa.value);
});


/** *********** **/
document.addEventListener('click', function(e){ // removendo nome digitado e capturado na tela 
    const el = e.target; // mostra qual foi clicado na tela do index.html
    if (el.classList.contains('apagar')){
        el.parentElement.remove(); // removendo o pai do elemento, sendo assim ele também será removido
        salvarTarefas(); // salvando as tarefas na memória, para quando for apagar da tela, apague também da memória
    }
});


/**Salvando as tarefas **/

function salvarTarefas () {
    const liTarefas =  tarefas.querySelectorAll('li'); // pegando os  li das tarefas
    const listaDetarefas = []; // criando array

    for (let tarefa of liTarefas ){ // 
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // substituindo a palavra a " apagar" por "", quando é mostrando no array. o trim remove o espaço da string
        listaDetarefas.push(tarefaTexto); // adicionado a lista de tarefas no array
    }
    const tarefaJSON = JSON.stringify(listaDetarefas); // criando um JSON em uma única string. Uma string similar ao ARRAY
    localStorage.setItem('tarefas', tarefaJSON); // salvando uma string, no caso a lista de tarefas no application
}

/** Adicionado as tarefas  
    ela vai ler as tarefas e vai colocar de volta nas <ul> */

function adcionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');  
    const listaDetarefas = JSON.parse(tarefas); // convertendo as tarefas de volta para um ARRAY
    
    for (let tarefa of listaDetarefas){
        criaTarefa(tarefa);
    }
}
adcionaTarefasSalvas();
