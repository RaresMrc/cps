const express = require('express');
const app = express();
const port = 3000;

app.use('/script', express.static(__dirname + '/scripts/main.js'));
app.use('/style', express.static(__dirname + '/style.css'));

app.get('/', (req, res) => {
    res.sendFile('interface.html', {root: `${__dirname}`});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})