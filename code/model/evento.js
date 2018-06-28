const mongoose = require('../database/connect');

const EventoSchema = new mongoose.Schema({
    name: {type: String,required: true,},
    data: {type: Date,required: true,},
    createdAt: {type: Date,default: Date.now,},
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;