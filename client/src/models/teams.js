var Team = require('./team');

var Teams = function() {
}

Teams.prototype = {
  populateFilms: function(results){
    var teams = [];
    for(var result of results){
      var team = new Team(result);
      teams.push(team);
    }
    return teams;
  }
}

module.exports = Teams;
















