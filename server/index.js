const express = require('express');
const app = express();
const path = require('path')
const volleyball = require('volleyball');

const { User, Favorite, Thing } = require('./db');

app.use(volleyball);
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
})

app.get('/api/users', (req, res, next) => {
    User.findAll({
        include: [
            {
                model: Favorite,
                include: [ Thing ]
            }
        ]
    })
    .then((data) => res.send(data))
    .catch(next);
})

app.get('/api/things', (req, res, next) => {
    Thing.findAll({
        include: [
            {
                model: Favorite,
                include: [ User ]
            }
        ]
    })
    .then((data) => res.send(data))
    .catch(next);
})

module.exports = app;
