// this server respose statuse code 500 using express on github
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    const respon = axios.get('https://hadi-xp.github.io/serverError/');
    res.status(500).send(`${respon}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});