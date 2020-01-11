const express = require('express');
const router = express.Router();
const isNull = require('../script').isNull;
const Cryptr = require('cryptr');
const config = require('../config');
const cryptr = new Cryptr(config.security.key);

router.get('/', (req, res, next) => {
    res.render('signUp', {
        message: ''
    });
});

router.post('/', (req, res, next) => {//requisição via post para realizar cadastro de usuário. variaveis - req = 

    console.log(req.body);
    let name = req.body.name;    //recebimento da informação do nome vinda do formulario - req = requisição vinda do front via URL / body = informações pegas através do formulario / nome = id ou name do input no formulario do html que identifica a informação!!!!!
    let lastname = req.body.lastName;
    let username = req.body.email;
    let password = req.body.password;
    let cPassword = req.body.cPassword;

    if (isNull(name) || isNull(lastname) || isNull(username) || isNull(password) || isNull(cPassword) ) {
        if (username != cPassword){
            res.status(400).json({'error': 'As senhas não estão iguais'});
        }
        res.status(400).json({'error': 'nome, sobre nome, email ou senha invalido'});
    }//if que verifica se as variaveis estão nulas
    

    //password = cryptr.encrypt(password);

    //console.log(`name: ${name}, username: ${username}, password: ${password}`);

    createUser(name, lastname, password, cPassword, username).then(results => { // função que cadastra no banco de dados o usuário
        req.session.message = `User ${username} created succesfully! Please log in...`; //mensagem usada na sessão para identificar o usuário cadastrado
        res.status(302).redirect('/SingIn.html'); //res = response ou resposta dada pelo servidor/ redirect indica qual a url está sendo usada para direcionar a esta página depois de salvar nobanco de dados com sucesso
    }).catch(error => {
        res.render('signup', {message: "Erro ao cadastrar usuário.", error: error}); // caso de erro vai chamar a tela de signup com uma mensagem salva em formato de objeto
    });

});

function createUser(name, lastname, password, cPassword, username) {// função que salva o usuario cadastrado
    return new Promise((resolve, reject) => {
        let create = undefined;
        checkUser(username).then(exists => {
            create = !exists;
            console.log('create:', create);
            if (create) {
                //string com a query de insert no banco de dados
                let querystring = `INSERT INTO portador (nome, ultimo_nome, email, senha, csenha) VALUES ('${name}', '${lastname}', '${password}', '${cPassword}', '${username}')`;
                global.conn.request().query(querystring).then(results => {//Database é um modulo qur ou e faz a conecção do servidor com o banco e permite cadastrar ou buscar dados do banco
                    resolve(results);
                }).catch(error => {
                    console.error(error);
                    reject(error);
                });
            } else {
                reject('User already exists!');
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

 function checkUser(username) {
    let querystring = `SELECT * FROM portador WHERE email = '${username}'`;
    return new Promise((resolve, reject) => {
        global.conn.request().query(querystring).then(results => {
                let exists = results.length > 0;
                resolve(exists);
            }).catch(error => {
                reject(error);
            });
        });
}

module.exports = router;