const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});