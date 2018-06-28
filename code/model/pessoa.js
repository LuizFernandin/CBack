const mongoose = require('../database/connect');

const PessoaSchema = new mongoose.Schema({
    name: {type: String,required: true,},
    email: {type: String,unique: true,required: true,lowercase: true,},
    password: {type: String,required: true,select: false,},
    namePai: {type: String,required: true,},
    nameMae: {type: String,required: true,},
    createdAt: {type: Date,default: Date.now,},
});

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;