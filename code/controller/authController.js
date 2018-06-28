const express = require('express');
const Pessoa = require('../model/pessoa');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const Pessoa = await Pessoa.create(req.body);
        return res.send({ player });
    } catch (error) {
        return res.status(400).send({ error: 'Falha de Registro!' });
    }
});

module.exports = app => app.use('/auth', router);