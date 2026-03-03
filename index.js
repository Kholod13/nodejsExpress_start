//Node JS Express - Start

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home page');
})
app.get('/about', (req, res) => {
    res.send('About us page');
})
app.get('/user/:username/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}, name: ${req.params.username}`);
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Express server on http://localhost:${PORT}`);
});