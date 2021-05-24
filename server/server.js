const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require( './routes/book.router');
const movieRouter = require('./routes/movie.router');

const app = express();
const PORT = process.env.PORT || 5000;
// const bookList = []; IN ROUTE
// const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
// GO FIND THE ROUTER YOU WANT
// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });

//put in "/" will make all traffic go through bookRouter
/// we put in "/book" instead to only make /book requests/posts/whatever go through, but this makes
// server assume ALL references to /book go through bookRouter
app.use('/book', bookRouter);

app.use('/movie', movieRouter);

// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });
