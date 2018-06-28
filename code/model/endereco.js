const mongoose = require('../database/connect');

const EnderecoSchema = new mongoose.Schema({
    cep: {type: String,required: true,},
    logradouro: {type: String,required: true,},
    bairro: {type: String,unique: true,required: true,},
    cidade: {type: String,required: true,select: false,default: 'Uberlândia'},
    estado: {type: String,required: false,default: 'Minas Gerais'},
    pais: {type: String,required: false,default: 'Brasil'},
    createdAt: {type: Date,default: Date.now,},
});

const Endereco = mongoose.model('Endereco', EnderecoSchema);

module.exports = Endereco;