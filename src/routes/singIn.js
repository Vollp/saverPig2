var express = require('express');
var router = express.Router();
var isNull = require('../script').isNull;
var Database = require('../Database');
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);

// rota de autenticação
router.post('/', (req, res, next) => {
    console.log('tentando autenticar...');

    try {
			
		// após o body, são os nomes dos campos no formulário	
		var login = req.body.email;
		var senha = req.body.password;
		
		const msgErro = {'mensagem': 'Login e/ou senha inválidos!'};
		
		if (isNull(login) || isNull(senha)) {
			console.log('Login e/ou senha inválidos');
			res.render('SingIn', msgErro);
		} else {
			console.log('tentando consulta no banco...');
			// altere aqui o seu select de acordo com sua tabela
			global.conn.request().query(`SELECT * FROM portador WHERE email = '${login}';`).then(results => {
				console.log(`Linhas: ${results.recordsets[0].length}`);
				let linhas = results.recordsets[0];
				
				if (linhas.length > 0) {
					let senhaBanco = linhas[0].password; // é 'senha' o nome de seu campo?
					if (senhaBanco === password) {
						let user = {
							// mantenha "nome" e "login" antes dos ":"
							nome: linhas[0].email, // é 'nome' o nome de seu campo?
							login: linhas[0].password, // é 'login' o nome de seu campo?
						};
						req.session.user = user;
						res.status(200).send('ok');
					} else {
						res.status(401).send(msgErro);
					}
				} else {
					res.status(401).send(msgErro);
				}
			}).catch(error => {
				res.status(401).send(msgErro);
			});
		}
    
	} catch (e) {
		console.error(`erro: ${e}`);
		res.send({'mensagem':`${e}`});
	}

});