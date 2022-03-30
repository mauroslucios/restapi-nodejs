const mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb:27017/apirest').then(()=>{
    console.log('Mongodb conectado...')
}).catch((err)=>{
    console.log('Houve um erro ao conectar: '+ err)
})

mongoose.Promise = global.Promise
module.exports = mongoose
