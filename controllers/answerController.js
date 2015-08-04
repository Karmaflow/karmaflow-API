var db =  require('../utils/db'),
    Answer = require ('../models/answer'),
    numeral = require('numeral');
    db.once('open', function () {
      console.log('MongoDB y mongoose listo');
    });

var answerController = {}

var getAnswersbyQuestion= function(req,res){
      var id = req.params.idQuestion;
        console.log(tag);
        Answer.find({'id':id},function(err,questions){
            if(err){
               return res.status('500').json({'error':err})
            }
            if(questions){
              console.log(questions);
              return res.status('200').json({'questions':questions});
            }
      });
},
createAnswer= function(req,res){

  var q = new Answer ({
      title: req.body.title,
      post:req.body.post,
      tag:req.body.tag
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
};

answerController.getAnswersbyQuestion = getAnswersbyQuestion;
answerController.createAnswer = createAnswer;
module.exports = answerController;
