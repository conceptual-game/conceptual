const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// routes
require(__dirname + '/routes')(app, {});

// application setting properties
// see more @https://expressjs.com/en/4x/api.html#app.set
// Set the default templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/assets'));

app.listen(port, () => {
  console.log('live on ' + port);
});
