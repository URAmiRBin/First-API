var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('My First API!');
});

app.listen(3000, function(){
    console.log("First API runnig on port 3000");
});

app.get('/funions', function(req, res){
   res.send('you gimme some food'); 
});