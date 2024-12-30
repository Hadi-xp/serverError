// this server respose statuse code 500 using express on github
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});