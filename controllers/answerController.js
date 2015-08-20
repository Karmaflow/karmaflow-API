var db =  require('../utils/db'),
    Answer = require ('../models/answer'),
    numeral = require('numeral');
    mongoose = require('mongoose');

var answerController = {}

var createAnswer= function(req,res){
  var _id = req.body.id;
  var q = new Answer ({
      post:req.body.post,
      question:_id,
      karma:0
  });
  q.save(function(err,question){
    if(err){
      return res.status('500').json({'error':err})
    }
    if(question){
      console.log(question);
      return res.status('200').json({'question':question});
    }
  });
},
getAnswersByQuestion = function (req,res){
    var _id = req.query.id;
    console.log(_id);
    Answer.find({ "question" :_id},function(err,answers){
        if(err){
           return res.status('500').json({'error':err})
        }
        if(answers){
          console.log(answers);
          return res.status('200').json({'answers':answers});
        }
    });

},
giveKarma = function(req,res){
    var _idQ = req.body.idQuestion;
    var _idA = req.body.idAnswer;
    console.log(_idA);
    console.log(_idQ);
    Answer.update({$and:[{question:_idQ},{_id:_idA}]}
        ,{$inc:{ karma: +1}},function(err,raw){
            if(err)
                return res.status('500').json({'error':err})
             return res.status('200').json({'answers':raw});

    });

};

answerController.createAnswer = createAnswer;
answerController.getAnswersByQuestion = getAnswersByQuestion;
answerController.giveKarma = giveKarma;
module.exports = answerController;
