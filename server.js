/* ==== External Modules ==== */
const express = require('express');
const methodOverride = require('method-override');

/* ==== Global Variables ==== */
const PORT = 3000;
const controllers = require('./controllers');

/* ==== Run Express Dependency ==== */
const app = express();

/* ==== App configs ==== */
app.set('view engine', 'ejs');

/* ==== Middlewares ==== */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

/* ==== Use Controllers ==== */
app.use('/users', controllers.user);
/* ==== logger ==== */
app.use((req, res, next) => {    
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
	next();
});

// ==== Routes ==== //
app.get('/', (req, res, next) => {
    res.render('users/index')
    console.log(`app.get '/' on port: ${PORT}`);
});

// ==== 404 ==== //
app.get('/*', (req, res) => {
    const context = { error: req.error};
    return res.status(404).render('404', context);
});

// ==== Server Listening for Req on PORT ==== //
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT} @ http://localhost:${PORT}`);
});