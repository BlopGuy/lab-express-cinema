const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res) => {
  Movie.find().then((allmoviesDB) => {
      console.log(`rendered ${allmoviesDB.title}`);
    res.render('movie-list', { movie: allmoviesDB });
  });
});

router.get('/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then((theMovieFromDB) => {
    res.render('movie-details', { movie: theMovieFromDB })
  });
});

module.exports = router;