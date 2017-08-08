var MongoClient = require('mongodb').MongoClient;

var TeamQuery = function(){
  this.url = "mongodb://localhost:27017/pl_teams"
};


TeamQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('teams');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  }
}

module.exports = TeamQuery;