//this is the controller function
const { Artist } = require('../models')


//There are going to be multiple exports, so they are individually put into functions
exports.createArtist = (req, res) => {
    console.log(Artist);
    Artist.create(req.body).then(artist => res.status(201).json(artist));
};
/* Note the term artist above is arbitary, it could be named anything,
but best pratice is to name it to indicate what it does. */

exports.listsArtists = (req, res) => {
    Artist.findAll({}).then(artist => res.status(200).json(artist));
};


