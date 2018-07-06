const mongoose = require('../database/connect');

const EventoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
        default: Date.now,
    },
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;