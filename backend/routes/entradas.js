const { Router } = require('express');
const router = Router();

router.get('/entradas', (req, res) => {
    res.send('Entradas desde la bd');
});

module.exports = router;


// {} [] ||