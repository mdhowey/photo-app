/* ==== External Modules ==== */
const express = require('express');
const router = express.Router();

/* ==== Internal Modules ==== */
const User = require('../models/User');

/* ==== User Routes ==== */

// == index == //
router.get('/', function (req, res) {
    User.find({}, (error, users) => {
        if (error) return console.log(error);

        const context = {
            users,
        }

        res.render('users/index', context);
    });
});

// == New User Form == //
router.get('/new', (req, res) => {
    res.render('new');
})

// == Post Request from addUser == //
router.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    User.create(req.body, (error, newUser) => {
        if (error) return console.log(error);

        console.log(newUser);

        return res.redirect('/users');
    });
});

// == Show == //
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (error, foundUser) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }
        
        return res.render('users/show.ejs');
    });
});

// == Edit == //
router.get('/:userId/edit', (req, res) => {
    User.findById(req.params.userId, (error, foundUser) => {
        if (error) return console.log(error);

        return res.render('edit.ejs', { user: foundItem });
    });
});

// == Update == //
router.put('/:userId', (req, res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            $set: req.body
        },
        {
            new: true,
        },
        (error, updatedUser) => {
            if (error) return console.log(error);

            return res.redirect(`/users/${updatedUser.id}`);
        },
    );
});

// == Delete == //
router.delete('/:userid', (req, res) => {
    User.findByIdAndDelete(req.params.userId, (error, deletedUser) => {
        if (error) return console.log(error);

        console.log(deletedUser);
        return res.redirect('/users')
    });
});

module.exports = router;