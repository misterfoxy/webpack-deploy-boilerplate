const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "..", 'public');

const PORT = process.env.PORT || 3002;

app.use(express.static(publicPath));

//default serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('server is up');
});