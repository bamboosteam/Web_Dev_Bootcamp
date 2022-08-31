const express = require('express');
const app = express();
// console.dir(app);

// app.use((req, res) => { // runs whenever request comes
//     console.log("WE GOT A NEW REQUEST");
//     res.send("THIS IS A RESPONSE");
// })

// routing by using app.get (GET request)
app.get('/', (req, res) =>{
    res.send("Welcome to this is the home page");
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!');
})

app.get('/cats', (req, res) => {
    res.send('cats calling');
})

app.get('/dogs', (req, res) => {
    res.send('dogs calling');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})