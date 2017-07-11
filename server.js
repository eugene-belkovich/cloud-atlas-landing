var express = require("express");
var app     = express();
var path    = require("path");

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/vendor', express.static(__dirname + '/vendor'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

console.log("Running at Port 3000");