const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const sala = new Schema ({

    numero      : { type:Number, required: true},
    capacidade  : { type:Number, required: true},
    descricao   : { type:String, required: true},
    valor       : { type:Number, required: true}
    
})

const SalaModel = mongoose.model('salas', sala);


module.exports = {SalaModel}