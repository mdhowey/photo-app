const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});

require('./config/db.connection');

app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleDateString()}`);
    next();
});

app.get('/', (req, res) => {
    console.log(`app.get '/' on port: ${PORT}`);
    res.send(`<h1>Test on '/' ==> it worked!</h1>`)
});