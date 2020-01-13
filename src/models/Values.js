const Database = require('../utils/Database');

class Values {
    async cadastrarValores(salario, economia) {
        try{
            const response = await Database.query(`insert into saldo(saldo_disponivel, saldo_mensal) values('${salario}', '${economia}') returning *`);

            console.log(response);

            return response;
        } catch(error) {
            console.error(`Erro ao cadastrar valores! ${error}`);
        }
    }
}

module.exports = new Values();