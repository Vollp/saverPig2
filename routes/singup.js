var express = require('express');
var router = express.Router();
var Database = require('../database/Database');

router.post('/', (req, res) => {

    console.log('teste');

    const nome = req.body.name;
    const sobreNome = req.body.lastName;
    const email = req.body.email;
    const senha = req.body.password;
    const confirmarSenha = req.body.cPassword;

    if (isNull(nome) || isNull(sobreNome) || isNull(email) || isNull(senha) || isNull(confirmarSenha) ) {
        if (senha != confirmarSenha){
            res.status(400).json({'error': 'As senhas devem ser iguais'});
        }
        res.status(400).json({'error': 'nome, sobre nome, email ou senha invalido'});
    }

    console.log('Tentando inserir no banco...');

    Database.query(`INSERT INTO portador VALUES ('${nome}', '${sobreNome}', '${emaemailil}', '${senha}', '${confirmarSenha}');`)
          .then(results => {
            console.log(results);
                      res.status(200).redirect('index.html');
          }).catch(error => {
            console.log('Erro no 1º insert ' + error);
            res.send(` ${error}`);
          });
      
  });
  
  module.exports = router;