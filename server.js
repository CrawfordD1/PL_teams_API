var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");

var TeamQuery = require('./client/db/teamQuery.js');
var query = new TeamQuery();

app.listen(3000, function () {
  console.log('App running on port '+ this.address().port);
});

app.get('/', function(req, res){
  res.redirect('/api/plteams');
})

app.get('/api/plteams', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});