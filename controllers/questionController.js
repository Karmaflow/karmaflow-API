var db =  require('../utils/db'),
    Question = require ('../models/question'),
    numeral = require('numeral');
var questionController = {}

var getQuestionsbyTag= function(req,res){
        // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

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
};

questionController.getQuestionsbyTag = getQuestionsbyTag;
questionController.createQuestion = createQuestion;
module.exports = questionController;
