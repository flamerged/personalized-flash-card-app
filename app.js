const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request, response) => {
    if (request.cookies.username) {
        response.render('index', { name: request.cookies.username });
    } else {
        response.redirect('hello');
    }
});

app.get('/cards', (request, response) => {
    response.render('card', {
        prompt: 'Who is buried in my Garden!',
        hint: 'I am your Fater'
    });
});

app.get('/hello', (req, res) => {
    if (req.cookies.username) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('hello');
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(1337, () => {
    console.log('The Server is running on local port 1337');
});
