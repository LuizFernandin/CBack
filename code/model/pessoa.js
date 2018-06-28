const mongoose = require('../database/connect');
const bcrypt = require('bcryptjs');

const PessoaSchema = new mongoose.Schema({
    name: {type: String,required: true,},
    email: {type: String,unique: true,required: true,lowercase: true,},
    password: {type: String,required: true,select: false,},
    namePai: {type: String,required: true,},
    nameMae: {type: String,required: true,},
    createdAt: {type: Date,default: Date.now,},
});

PessoaSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;