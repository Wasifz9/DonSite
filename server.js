const express = require('express');
const app = express();

app.use(express.static('public'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Running on port " + port );
})