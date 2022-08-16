const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso ){
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura ){
        setResultado('Altura Inválido', false);
        return;
    }
    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = (`Seu IMC é ${imc}(${nivelImc})`);
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['A baixo do peso','Peso normal', 'Sobrepeso', 
    'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3' ];
/**quando o comoando e pequeno pode ser feito sem as {}, em uma unica linha */
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];

}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}
function criaP(){
    const p = document.createElement('p');
    return p;
}

 function setResultado(msg, isvalid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
   
    const p = criaP();

    if (isvalid){
        p.classList.add('Paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

 }
/*
uma forma de fazer 


imc = peso /(altura * altura);
if (imc < 18,5){
    console.log('A baixo do peso');
} else if (imc >= 18,5 || imc <= 24,9){
    console.log('Peso normal');
} else if (imc >= 25 || imc <= 29,9){
    console.log('Sobrepeso');
}else if (imc >= 30 || imc <= 34,9){
    console.log('Obesidade grau 1');
}else if (imc >=35 || imc <= 39,9){
    console.log(c);
}else if(imc > 40){
    console.log('Obesidade garu 3');
}

 console.log(`Seu IMC é ${imc}`);
 
 SEUNDA FORMA EM BLOCOS 
   if(imc>= 39.9){
        return nivel[5];
    }
    if ( imc >+ 34.9){
        return nivel[4];
    }
    if (imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc >= 18.5){
        return nivel[1];
    }
    if (imc < 18.5){
        return nivel[0];
    }
}
 
 
 
 */