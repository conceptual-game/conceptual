const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// routes
require('./routes')(app, {});

app.listen(port, () => {  console.log('Live on ' + port); });