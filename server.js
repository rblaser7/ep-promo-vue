const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))

let epitome = {
    reviews: []
};
let instrument = {
    reviews: []
};
let mistletoe = {
    reviews: []
};
let id = 0;

app.get('/api/epitome/reviews', (req, res) => {
    res.send(epitome.reviews);
});

app.get('/api/instrument/reviews', (req, res) => {
    res.send(instrument.reviews);
});

app.get('/api/mistletoe/reviews', (req, res) => {
    res.send(mistletoe.reviews);
});

app.put('/api/epitome/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let reviewMap = epitome.reviews.map(review => { return review.id; });
    let index = reviewMap.indexOf(id);
    let review = epitome.reviews[index];
    review.text = req.body.text;
    review.date = req.body.date;
    res.send(review);
});

app.put('/api/instrument/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let reviewMap = instrument.reviews.map(review => { return review.id; });
    let index = reviewMap.indexOf(id);
    let review = instrument.reviews[index];
    review.text = req.body.text;
    review.date = req.body.date;
    res.send(review);
});

app.put('/api/mistletoe/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let reviewMap = mistletoe.reviews.map(review => { return review.id; });
    let index = reviewMap.indexOf(id);
    let review = mistletoe.reviews[index];
    review.text = req.body.text;
    review.date = req.body.date;
    res.send(review);
});

app.post('/api/epitome/reviews', (req, res) => {
    id = id + 1;
    let review = { id: id, text: req.body.text, reviewer: req.body.reviewer, date: req.body.date, album: req.body.album };
    epitome.reviews.push(review);   
    res.send(review);
});

app.post('/api/instrument/reviews', (req, res) => {
    id = id + 1;
    let review = { id: id, text: req.body.text, reviewer: req.body.reviewer, date: req.body.date, album: req.body.album };
    instrument.reviews.push(review);
    res.send(review);
});

app.post('/api/mistletoe/reviews', (req, res) => {
    id = id + 1;
    let review = { id: id, text: req.body.text, reviewer: req.body.reviewer, date: req.body.date, album: req.body.album };
    mistletoe.reviews.push(review);
    res.send(review);
});

app.delete('/api/epitome/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = epitome.reviews.map(review => { return review.id; }).indexOf(id);
    if (removeIndex === -1) {
        res.status(404).send("Sorry, that item doesn't exist");
        return;
    }
    epitome.reviews.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.delete('/api/instrument/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = instrument.reviews.map(review => { return review.id; }).indexOf(id);
    if (removeIndex === -1) {
        res.status(404).send("Sorry, that item doesn't exist");
        return;
    }
    instrument.reviews.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.delete('/api/mistletoe/reviews/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let removeIndex = mistletoe.reviews.map(review => { return review.id; }).indexOf(id);
    if (removeIndex === -1) {
        res.status(404).send("Sorry, that item doesn't exist");
        return;
    }
    mistletoe.reviews.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))