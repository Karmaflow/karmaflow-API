var db =  require('../utils/db'),
    Question = require ('../models/question')



    db.once('open', function () {
      console.log('MongoDB y mongoose listo');
    });
var questionController = {}

var getQuestionsbyTag= function(req,res){
      var tag = req.params.tag;
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
  console.log('Saving....');
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
};

questionController.getQuestionsbyTag = getQuestionsbyTag;
questionController.createQuestion = createQuestion;
module.exports = questionController;
