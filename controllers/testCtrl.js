var mongodb = require('../database/mongodb');

// Routes
module.exports = {
  pingDb: function(req, res, next) {
    
    mongodb.connect('mongodb://mongo:27017/esante', function(err, db) {
      if (err) {
        return res.send('Unable to connect to Mongo Database.');
      }
      return res.send("Connected to Mongo Database.");
    })
  }
}