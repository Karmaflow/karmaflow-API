'use strict'
var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
          post:String,
          tag:String,
          date: {
            type: Date,
            default: Date.now
           }
        });
module.exports = mongoose.model('Answer',answerSchema);
