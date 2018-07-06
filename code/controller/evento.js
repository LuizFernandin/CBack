const express = require('express');
const Evento = require('../model/evento');
const authMiddle = require('../middle/auth');
const router = express.Router();

router.use(authMiddle);

router.post('/register', async (req, res) => {
    const { data } = req.body;

    try {
        if (await Evento.findOne({ data }))
            return res.status(400).send({ error: 'Evento já existente!' });

        const evento = await Evento.create({ ...req.body, pessoa: req.pessoaId });

        return res.send({ evento });

    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: 'Falha de Registro Evento!' });
    }
});

router.get('/list', async (req, res) => {
    try {
        const eventos = await Evento.find().populate('pessoa');
        return res.send({ eventos });
    }
    catch (err) {
        return res.status(400).send({ error: 'Eventos não cadastradas!' });
    }
});

router.get('/:eventoId', async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.eventoId).populate('pessoa');
        
        if (evento == null)
            return res.status(400).send({ error: 'Evento não cadastrado!' });
        else
            return res.send( evento );
            
    }
    catch (err) {
        return res.status(400).send({ error: 'Evento não cadastrado!' });
    }
});

router.delete('/delete/:eventoId', async (req, res) => {
    try {
        await Evento.findByIdAndRemove(req.params.eventoId);
        return res.send();
    }
    catch (err) {
        return res.status(400).send({ error: 'Evento não deletada!' });
    }
});

module.exports = app => app.use('/evento', router);