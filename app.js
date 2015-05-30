var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/* Routes */
var routes = require('./routes/route')(app);


/* Middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Server Stuff */

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("API Server Listening on Port " + port);
});