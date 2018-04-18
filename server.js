const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;

// jwt setup
const jwt = require('jsonwebtoken');
let jwtSecret = process.env.jwtSecret;
if (jwtSecret === undefined) {
    console.log("You need to define a jwtSecret environment variable to continue.");
    knex.destroy();
    process.exit();
}

app.use(express.static('dist'));

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(403).send({ error: 'No token provided.' });
    jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err)
            return res.status(500).send({ error: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        req.userID = decoded.id;
        next();
    });
}

// Get my account
app.get('/api/me', verifyToken, (req, res) => {
    console.log("Here!");
    knex('users').where('id', req.userID).first().then(user => {
        res.status(200).json({ user: user });
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

// Login
app.post('/api/login', (req, res) => {
    if (!req.body.email || !req.body.password)
        return res.status(400).send();
    knex('users').where('email', req.body.email).first().then(user => {
        if (user === undefined) {
            res.status(403).send("Invalid credentials");
            throw new Error('abort');
        }
        return [bcrypt.compare(req.body.password, user.hash), user];
    }).spread((result, user) => {
        if (result) {
            let token = jwt.sign({ id: user.id }, jwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).json({ user: { name: user.name, email: user.email, id: user.id },token:token });
        } else {
            res.status(403).send("Invalid credentials");
        }
        return;
    }).catch(error => {
        if (error.message !== 'abort') {
            console.log(error);
            res.status(500).json({ error });
        }
    });
});

// Register
app.post('/api/users', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name)
        return res.status(400).send();
    knex('users').where('email', req.body.email).first().then(user => {
        if (user !== undefined) {
            res.status(403).send("Email address already exists");
            throw new Error('abort');
        }
        return bcrypt.hash(req.body.password, saltRounds);
    }).then(hash => {
        return knex('users').insert({
            email: req.body.email, hash: hash,
            name: req.body.name, role: 'user'
        });
    }).then(ids => {
        return knex('users').where('id', ids[0]).first().select('email', 'name', 'id');
    }).then(user => {
        let token = jwt.sign({ id: user.id }, jwtSecret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).json({ user: user, token: token });
        return;
    }).catch(error => {
        if (error.message !== 'abort') {
            console.log(error);
            res.status(500).json({ error });
        }
    });
});

// Reviews
app.get('/api/:album/reviews', (req, res) => {
    let album = req.params.album;
    console.log("Getting " + album + " reviews.")
    knex('users').join('reviews', 'users.id', 'reviews.user_id')
        .where('reviews.album', album)
        .orderBy('reviews.created', 'desc')
        .select('name', 'review', 'created', 'album', 'reviews.id').then(reviews => {
            res.status(200).json({ reviews: reviews });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error });
        });
});

app.put('/api/:album/reviews/:id', verifyToken, (req, res) => {
    let id = parseInt(req.params.id);
    let album = req.params.album;
    knex('reviews').where({ id: id, album: album }).first()
        .update('review', req.body.text).then(review => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error });
        });
});

app.post('/api/:album/reviews', verifyToken, (req, res) => {
    let id = req.body.id; // this is now the userId
    let album = req.params.album;
    let text = req.body.text;
    knex('users').where('id', id).first().then(user => {
        console.log(req.body);
        return knex('reviews').insert({ user_id: id, review: text, created: new Date(), album: album })
    }).then(ids => {
        return knex('reviews').where('id', ids[0]).first();
    }).then(review => {
        console.log(review);
        res.status(200).json({ review: review });
        return;
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

app.delete('/api/:album/reviews/:id', verifyToken, (req, res) => {
    let id = parseInt(req.params.id);
    let album = req.params.album;
    knex('reviews').where('id', id).first().then(review => {
        return knex('reviews').where({ id: id, album: album }).first().del();
    }).then(ids => {
        res.sendStatus(200);
        return;
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error });
    });
});

app.listen(3000, () => console.log('Server listening on port 3000!'))