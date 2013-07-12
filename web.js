var express = require('express');
var fs = require('fs');

var str = fs.readFileSync('index.html');
//var buffer = new Buffer(str, 'utf-8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(str);}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
