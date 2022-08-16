const elementos =[
    {tag: 'p', texto: 'Qualquer coisa aqui'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');// selecioando o o local do html
const div = document.createElement('div'); // criando ua div


for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; // desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);