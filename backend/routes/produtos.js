const express = require('express');
const Produto = require('../models/Produto');
const router = express.Router();

router.get('/', (req, res) => {
    Produto.getAll((err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.post('/', (req, res) => {
    const { nome, codigo, descricao, preco } = req.body;
    Produto.create(nome, codigo, descricao, preco, (err, result) => {
        if (err) res.status(500).send(err);
        else res.status(201).send('Produto criado com sucesso!');
    });
});

router.put('/:id', (req, res) => {
    const { nome, codigo, descricao, preco } = req.body;
    Produto.update(req.params.id, nome, codigo, descricao, preco, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Produto atualizado com sucesso!');
    });
});

router.delete('/:id', (req, res) => {
    Produto.delete(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        else res.send('Produto deletado com sucesso!');
    });
});

module.exports = router;