var express = require('express');
var bodyParser = require('body-parser');
var chantbot = require('./chantbot');
var app = express();
var port = process.env.PORT || 3000;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world! Chant bot says welcome') });
 
app.post('/chant', chantbot);
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Chant bot listening on port ' + port);
});



