//WANT TO REPLACE APP WITH A LITTLE PIECE OF A SERVER THAT CAN HOOK UP WITH OUR MAIN SERVER
const express = require('express');
const router = express.Router();

const bookList = [];

//if we write app.use('/book') in server, we need to only write "/" here
// or
router.get('/book', (req, res) => {
    res.send(bookList);
});

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

//MAKE ROUTER AVAILABLE OUTSIDE FILE

module.exports = router;