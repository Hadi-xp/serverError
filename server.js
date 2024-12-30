// this server respose statuse code 500 using express on github
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.all('*', (req, res) => {
    res.status(500).send('serverError');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});