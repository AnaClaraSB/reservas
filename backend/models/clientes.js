const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const cliente = new Schema ({

    cpf       : { type:String, required: true},
    nome      : { type:Number, required: true},
    cep       : { type:Number, required: true}
})

const ClienteModel = mongoose.model('clientes', cliente);


module.exports = {ClienteModel}