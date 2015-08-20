var db =  require('../utils/db'),
    Question = require ('../models/question'),
    numeral = require('numeral'),
    mongoose = require('mongoose');
var questionController = {}

var getQuestionsbyTag= function(req,res){

      var tag =  req.query.tag;
        console.log(tag);
        Question.find({'tag':tag},function(err,questions){
            if(err){
               return res.status('500').json({'error':err})
            }
            if(questions){
              console.log(questions);
              return res.status('200').json({'questions':questions});
            }
      });
},

createQuestion= function(req,res){
  console.log(req.headers);
  console.log(req.body);
  var q = new Question ({
      title: req.body.title,
      post:req.body.post,
      tag:req.body.tag
  });
  console.log(q);
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

getQuestionsbyID = function(req,res){
  var id = req.params.id;
  console.log(id);
  Question.find({ "_id" : mongoose.Types.ObjectId(id)},function(err,question){
      if(err){
         return res.status('500').json({'error':err})
      }
      if(question){
        console.log(question);
        return res.status('200').json({'question':question});
      }
  });
};

questionController.getQuestionsbyTag = getQuestionsbyTag;
questionController.createQuestion = createQuestion;
questionController.getQuestionsbyID = getQuestionsbyID;
module.exports = questionController;
