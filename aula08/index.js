 const nome = 'José henrique';
 const sobreNome = "Miranda";
 const idade = 30;
 const peso = 84;
 const altura = 1.80;
 let imc;
 let anoNascimento;
 let anoAtual = 2022;


 imc = peso /(altura * altura);

 anoNascimento = anoAtual - idade;

 console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
 console.log(`tem ${altura} e seu IMC é de: ${imc} ${nome} nasceu no ano de ${anoNascimento}`);