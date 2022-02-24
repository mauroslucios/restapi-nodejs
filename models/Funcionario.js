const { required } = require('nodemon/lib/config');
const db = require('../database/connection');
const Schema = db.Schema;


const Funcionario = new Schema({
    
    nome:{
        type: String,
        required: true
    },
    sobreNome:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    },
    dataNascimento:{
        type: Date
    }

})

db.model("funcionarios", Funcionarios);
module.exports = Funcionario