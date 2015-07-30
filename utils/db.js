var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/karmaflow');

var db = mongoose.connection;

module.exports = db;
