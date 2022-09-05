const express = require('express');
const app = express();
const path = require('path');
const { execPath } = require('process');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // without path.join, node index.js has to be called at the specific directory where index.js is located.

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/cats', (req, res) => {
    const cats = ["Blue", "Maple", "Ribbon", "Yamato", "MMs"];
    res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) =>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num})
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})