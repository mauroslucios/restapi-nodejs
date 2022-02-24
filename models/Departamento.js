const db = require('../database/connection');
const Schema = db.Schema;

const Departamento = new Schema({
    nome:{
        type: String,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
})

db.model("collection_departamento", Departamento);