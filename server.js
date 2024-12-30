// this server respose statuse code 500 using express on github
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(500).send('serverError');
});