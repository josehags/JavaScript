function mostraHora () {
    let data = new Date();
                            // função para mostra hora atual
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const timer = setInterval(function() {
    console.log(mostraHora()); // execução da hora em segundos
}, 1000);

// função para para a execução

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo');
}, 5000);