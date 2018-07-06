const express = require('express');
const Pessoa = require('../model/pessoa');
const authMiddle = require('../middle/auth');
const router = express.Router();

//router.use(authMiddle);

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await Pessoa.findOne({ email }))
            return res.status(400).send({ error: 'Pessoa já existente!' });

            const pessoa = await Pessoa.create(req.body);

            //pessoa.password = undefined;

        return res.send({ pessoa });

    } catch (error) {
        return res.status(400).send({ error: 'Falha de Registro!' });
    }
});

router.get('/list', async (req, res) => {
    try {
        const pessoas = await Pessoa.find();
        return res.send({ pessoas });
    }
    catch (err) {
        return res.status(400).send({ error: 'Pessoas não cadastradas!' });
    }
});

router.get('/:pessoaId', async (req, res) => {
    try {
        const pessoa = await Pessoa.findById(req.params.pessoaId);
        
        if (pessoa == null)
            return res.status(400).send({ error: 'Pessoas não cadastrada!' });
        else
            return res.send({ pessoa });
            
    }
    catch (err) {
        return res.status(400).send({ error: 'Pessoas não cadastrada!' });
    }
});

router.delete('/delete/:pessoaId', async (req, res) => {
    try {
        await Pessoa.findByIdAndRemove(req.params.pessoaId);
        return res.send();
    }
    catch (err) {
        return res.status(400).send({ error: 'Pessoas não deletada!' });
    }
});

module.exports = app => app.use('/pessoa', router);