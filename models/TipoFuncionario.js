const db = require('../database/connection');
const Schema = db.Schema;

const TipoFuncionario = new Schema({
    nomeTipo:{
        type: String,
        required: true
    }
})

db.model("colletcion_tipo_funcionario", TipoFuncionario);