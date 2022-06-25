const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

mongoose.connect(process.env.dbConnection, { useNewUrlParser: true }, () => {
    console.log("yes connected");
})

app.listen(3000);