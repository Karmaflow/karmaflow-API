'use strict'
var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , Answer =  require('./answer')
  , User =  require('./user')

var questionSchema = mongoose.Schema({
          title: String,
          post:String,
          tag:String,
          date: {
            type: Date,
            default: Date.now
           },
           answers :[Answer.schema],
           postedBy:[User.schema]
        });

module.exports = mongoose.model('Question',questionSchema);
