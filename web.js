var  express = require('express');
var fs = require('fs');
var htmlFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html_var = fs.readFileSync(htmlFile).toString();
  response.send(html_var);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
















