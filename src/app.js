const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const artistControllers = require('./controllers/artist');

const app = express();

app.use(express.json());


app.get('/artists', (req, res) => {
  res.send({
    name: 'Tame Impala',
    genre: 'Rock',
  });
});

app.post('/artists', artistControllers.createArtist);

module.exports = app;