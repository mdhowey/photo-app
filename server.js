const express = require('express');

const PORT = 4000;

const app = express();

app.set('view engine', 'ejs');

require('./config/db.connection');
const User = require('./models/User')
const userRouter = require('./controllers/user_controllers')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleDateString()}`);
    next();
});

app.get('/', (req, res) => {
    console.log(`app.get '/' on port: ${PORT}`);
    res.send(`<h1>Test on '/' ==> it worked!</h1>`)
});

app.use('/users', userRouter);

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});