var mongoose = require('mongoose');

//mongoose.connect('mongodb://heroku_3w3p59hh:qp53dldnvpsqrejikp16uediu5@ds029793.mongolab.com:29793/heroku_3w3p59hh');
mongoose.connect(ENV['S3_KEY']);

var db = mongoose.connection;

module.exports = db;
