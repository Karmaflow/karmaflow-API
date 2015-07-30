'use strict'
var mongoose = require('mongoose');

var questionSchema = mongoose.model('Question',{
          title: String,
          post:String,
          tag:String,
          date: {
            type: Date,
            default: Date.now
           },
        });

module.exports = mongoose.model('Question',questionSchema);
