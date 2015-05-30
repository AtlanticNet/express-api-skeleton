var MongoClient = require('mongodb').MongoClient;
var dbName = "api_db";

function connect(callback) {
  MongoClient.connect("mongodb://localhost:27017/" + dbName, function(err, db) {
    if (err) {
      console.log("MongoDB had trouble connecting");
    } else {
      console.log("MongoDB Connected");
      callback(null, db);
    }
  }); 
}

function collection(name, callback) {
  connect(function(err, db) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, db.collection(name));
    }
  });
}

module.exports = {
  connect: connect,
  collection: collection
}