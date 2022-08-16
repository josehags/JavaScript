const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const brackgroundColorBody = estilosBody.backgroundColor; //ligando CSS com html
console.log(brackgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = brackgroundColorBody; // colocando fundo do paragrafo
    p.style.color = '#FFFFFF'; // letra na cor branca
   
}