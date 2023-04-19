const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

var funcionarios = new Schema ({

    cpf       : { type:Number, required: true},
    nome      : { type:String, required: true},
    cep       : { type:Number, required: true},
    email     : { type:String, required: true},
    fone      : { type:Number, required: true},
    funcao    : { type:String, required: true}
    
})

const funcionariosModel = mongoose.model('funcionarios', funcionarios);


module.exports = {funcionariosModel}