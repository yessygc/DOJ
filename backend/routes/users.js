const { Router } = require('express');
const router = Router();

router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticacion');
});

module.exports = router;


// {} [] ||