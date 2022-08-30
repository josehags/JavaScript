const express = require ('express');
const app = express();

//          Criar    Ler   Atualizar  Apagar
//  CRUD => CREATE,  READ, UPDATE,    DELETE
//          POST     GET   PUT        DELETE

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app._router.get ('/testes/:idUsuario?', (req, res) => {
    console.log(req.params); // mostra o usuario no console
    res.send('OI');
});

app.post ('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log(' Acessar http://localhost:3000 ');
    console.log(' Servidor em execução...🔥  ');
});