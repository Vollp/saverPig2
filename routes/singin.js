var express = require('express');
var router = express.Router();
var isNull = require('../script').isNull;
var Database = require('../database/Database');
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);

router.post('/', (req, res, next) => {
    console.log('tentando autenticar...');

    try {

        // após o body, são os nomes dos campos no formulário	
        var login = req.body.email;
        var senha = req.body.password;

        const msgErro = { 'mensagem': 'Login e/ou senha inválidos!' };

        if (isNull(login) || isNull(senha)) {
            console.log('Login e/ou senha inválidos');
            res.redirect('/SingIn.html');
        } else {
            console.log('tentando consulta no banco...');
            // altere aqui o seu select de acordo com sua tabela
            Database.query(`SELECT * FROM portador WHERE email = '${login}';`).then(results => {
                console.log(`Linhas: ${results.recordsets[0].length}`);
                let linhas = results.recordsets[0];
                if (linhas.length > 0) {
                    let senhaBanco = linhas[0].senha; // é 'senha' o nome de seu campo?
                    if (senhaBanco === senha) {
                        let user = { // mantenha "nome" e "login" nos antes dos ":"// é 'nome' o nome de seu campo?
                            login: linhas[0].email, // é 'login' o nome de seu campo?
                            nome: linhas[0].nome,
                        };
                        req.session.user = user;
                        res.status(200).redirect('ok');

                    } else {
                        res.status(401).redirect('SingIn.html');
                    }
                } else {
                    res.status(401).redirect('SingIn.html');
                }
            }).catch(error => {
                res.status(401).send(msgErro);
            });
        }

    } catch (e) {
        console.error(`erro: ${e}`);
        res.send({ 'mensagem': `${e}` });
    }

});

// rota que recupera os dados do usuário na sessão
// a princípio, não precisa mexer aqui
router.get('/sessao', (req, res, next) => {
    if (req.session.user && req.session.user) {
        const usuario = req.session.user;
        res.json({
            'email': usuario.login,
            'nome': usuario.nome,
        });
    } else {
        res.status(401).json({
            'mensagem': 'Nenhum usuário na sessão'
        });
    }
});

module.exports = router;