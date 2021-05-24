const express = require('express');
const router = express.Router();

const movieList = [];



router.get('/', (req, res) => {
    res.send(movieList);
  });
  
router.post('/', (req, res) => {
    movieList.push(req.body);
    res.sendStatus(200);
  });


  module.exports = router;