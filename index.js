const espress = require('express');

const app = express()

app.get('/teste', (req, res) => {
  return res.json( { hello: 'world 2' })
});

app.listen(3333);

/*
git add .  para iniciar o git de um ponto
git comit -m "chore(para expansão do código) fix(para correção) feature(novos códigos) "

*/