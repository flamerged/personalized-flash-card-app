const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    if (request.cookies.username) {
        response.render('index', { name: request.cookies.username });
    } else {
        response.redirect('hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('hello');
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

module.exports = router;
