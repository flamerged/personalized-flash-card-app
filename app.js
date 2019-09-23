const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/cards', (request, response) => {
    response.render('card', {
        prompt: 'Who is buried in my Garden!',
        hint: 'I am your Fater'
    });
});

app.get('/hello', (req, res) => {
    res.render('hello', { name: req.cookies.username });
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('hello', { name: req.body.username });
});

app.listen(1337, () => {
    console.log('The Server is running on local port 1337');
});
