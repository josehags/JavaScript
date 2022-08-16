function  ePaisagem ( largura, altura){
  return largura > altura ? true : false;
}
console.log(ePaisagem(1920, 1080));

// Usando a Arrow functions 

const ePaisagem1 = (largura1, altura1) => largura1 > altura1;
console.log(ePaisagem(1920, 1080));
