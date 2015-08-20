'use strict'
var mongoose = require('mongoose')
        , Schema   = mongoose.Schema
        , Question =  require('./answer')

var answerSchema = mongoose.Schema({
          post:String,
          date: {
            type: Date,
            default: Date.now
            },
           question : Question,
           karma:Number
        });
module.exports = mongoose.model('Answer',answerSchema);
