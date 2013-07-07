var express = require('express');
var fs = require('fs');
var inFile = "index.html"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile(inFile, function (contents) {
    console.log(contents);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
