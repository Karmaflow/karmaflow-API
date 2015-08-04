'use strict'
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
          email: String,
          name:String,
          karma:String,
        });

module.exports = mongoose.model('User',userSchema);
