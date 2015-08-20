'use strict'
var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , Answer =  require('./answer')

var questionSchema = mongoose.Schema({
          title: String,
          post:String,
          tag:String,
          date: {
            type: Date,
            default: Date.now
           }
        });

module.exports = mongoose.model('Question',questionSchema);
