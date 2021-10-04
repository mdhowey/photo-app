const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/edit', (req, res) => {
    res.render('users/edit');
});

router.get('/index', (req, res) => {
    res.render('users/index');
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.get('/show', (req, res) => {
    res.render('users/show');
});

module.exports = router;