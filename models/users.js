var db = require('../database/mongodb')

exports.all = function(cb) {
  var collection = db.get().collection('users')

  collection.find().toArray(function(err, users) {
    cb(err, users)
  })
}

exports.find = function(cb, ) {
  var collection = db.get().collection('users')

  collection.find().sort().limit(100).toArray(function(err, docs) {
    cb(err, docs)
  })
}