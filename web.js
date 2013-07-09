var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var ind_htm = fs.readFileSync("index.html");
var buff = new Buffer(index);

app.get('/ ', function(request, response) {

  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
