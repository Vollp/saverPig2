const Database = require('../utils/Database');

class User{
    async register(nome, sobrenome, email, senha, confirmSenha){
        if(nome != null && sobrenome != null && email != null && senha != null && confirmSenha != null) {
            if(senha != confirmSenha) {
                return {
                        status: 400,
                        data: "Senhas devem coincidir"
                    };
            }
            
            try{
                const response = await Database.query(`insert into portador(nome, ultimo_nome, email, senha) values('${nome}', '${sobrenome}', '${email}', '${senha}') returning *`);
                
                console.log(response)

                return response;
            } catch(error) {
                console.error(`Erro ao tentar cadastrar! ${error}`);
            }
        } else {
            return {
                status: 400,
                data: "Preencha todos os campos!"
            };
        }
    }

    async login(email, senha){
        try{
            const user = await Database.query(`select * from portador where email = '${email}';`);

            if(user.length > 0){
                const found = user[0];

                console.log(found)
    
                if(senha == found.senha) {
                    return 200;
                }
            } else {
                return {
                    status: 400,
                    data: "Login recusado!"
                };
            }
        } catch (error) {
            console.error(`Erro ao tentar buscar usuários! ${error}`);
        }
    }
}

module.exports = new User();