const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');
const multer = require('multer');



//INICIALIZACIONES
const app = express();

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);

//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}));
app.use(express.json());

//RUTAS
app.use(require('./routes/anuncios'));
app.use(require('./routes/entradas'));
app.use(require('./routes/inicio'));
app.use(require('./routes/users'));


//SERVER IS LISTENING
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


// {} [] ||