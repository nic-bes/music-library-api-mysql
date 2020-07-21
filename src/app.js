const express = require('express');

const artistRouter = require('./routes/artists');
const albumRouter = require('./routes/album');
const artistControllers = require('./controllers/artists');

const app = express();

app.use(express.json());

app.post('/artist', artistControllers.createArtist);

app.get('/artist', artistControllers.listsArtists);

module.exports = app;