const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); // or const data = require("../data/flashcardData.json").data;
const { cards } = data; // this also takes cards array out of the data object

router.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    res.redirect(`${randomNumber}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query; // same as const side = req.query.side
    const { id } = req.params;
    const name = req.cookies.username;
    if (!name) {
        res.redirect('/');
    } else {
        if (!side) {
            res.redirect(`${id}?side=question`);
        } else {
            const text = cards[id][side];
            const { hint } = cards[id];
            const templateData = { text, id, name };

            if (side === 'question') {
                templateData.hint = hint;
                templateData.sideToShowDisplay = 'Answer';
                templateData.sideToShow = 'answer';
            } else if (side === 'answer') {
                templateData.sideToShowDisplay = 'Question';
                templateData.sideToShow = 'question';
            }
            res.render('card', templateData);
        }
    }
});

module.exports = router;
