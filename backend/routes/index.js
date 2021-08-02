const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/inicio', (req, res) => {
    res.send('Inicio');
});

module.exports = router;


// {} [] ||