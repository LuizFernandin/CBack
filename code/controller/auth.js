const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const Pessoa = require('../model/pessoa');
const router = express.Router();

router.post('/adm', async (req, res) => {
    const { email, password } = req.body;

    const pessoa = await Pessoa.findOne({ email }).select('+password');

    if (!pessoa)
        return res.status(400).send({ error: 'Pessoa não encontrada!' });

    if (pessoa.adm == false)
        return res.status(400).send({ error: 'Pessoa não administra!' });

    if (!await bcrypt.compare(password, pessoa.password))
        return res.status(400).send({ error: 'Senha invalida!' });

    const token = jwt.sign({ id: pessoa.id }, authConfig.secret, {
        expiresIn: 86400,
    });

    return res.send({ pessoa, token, });
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    const pessoa = await Pessoa.findOne({ email }).select('+password');

    if (!pessoa)
        return res.status(400).send({ error: 'Pessoa não encontrada!' });

    if (!await bcrypt.compare(password, pessoa.password))
        return res.status(400).send({ error: 'Senha invalida!' });

    const token = jwt.sign({ id: pessoa.id }, authConfig.secret, {
        expiresIn: 86400,
    });

    return res.send({ pessoa, token, });
});

module.exports = app => app.use('/auth', router);