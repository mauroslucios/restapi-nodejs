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
    }

})