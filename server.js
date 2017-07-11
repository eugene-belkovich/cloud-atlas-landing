var express = require("express");
var app     = express();
var path    = require("path");
var cool = require('cool-ascii-faces');

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/vendor', express.static(__dirname + '/vendor'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(3000);

console.log("Running at Port 3000");