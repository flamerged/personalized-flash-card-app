const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/cards', (request, response) => {
    response.render('card', {
        prompt: 'Who is buried in my Garden!',
        hint: 'I am your Fater'
    });
});

app.listen(1337, () => {
    console.log('The Server is running on local port 1337');
});
