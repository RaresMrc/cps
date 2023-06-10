const express = require('express');
const app = express();
const PORT = 3000;

app.use('/script', express.static(__dirname + '/scripts'));
app.use('/style', express.static(__dirname + '/style.css'));

app.get('/', (req, res) => {
    res.sendFile('interface.html', {root: `${__dirname}`});
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
