const mongoose = require('mongoose')
mongoose.connect('mongodb://172.21.0.2:27017/apirest').then(()=>{
    console.log('Mongodb conectado...')
}).catch((err)=>{
    console.log('Houve um erro ao conectar: '+ err)
})

mongoose.Promise = global.Promise
module.exports = mongoose
