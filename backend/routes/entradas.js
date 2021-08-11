const { Router } = require('express');
const router = Router();

const Entrada = require('../models/Entrada');

router.get('/dashboard/entradas', async (req, res) => {
    const entradas = await Entrada.find();
    res.json(entradas);
});

router.post('/dashboard/entradas', async (req, res) => {
    const { title, resume, author, isbn } = req.body;
    const newEntrada = new Entrada({title, resume, author, isbn})
    await newEntrada.save();
    res.json({message: 'Entrada guardada'});
});

router.delete('/dashboard/entradas/:id', async (req, res) => {
    await Entrada.findByIdAndDelete(req.params.id);
    res.json({message: 'Entrada eliminada'});
});

module.exports = router;


// {} [] ||