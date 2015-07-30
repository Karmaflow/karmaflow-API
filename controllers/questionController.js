var db =  require('../utils/db'),
    question = require ('../models/question')
    db.once('open', function () {
      console.log('MongoDB y mongoose listo');
    });
var questionController = {}

var getQuestionsbyTag= function(req,res){
      var tag = req.params.tag;
      question.find({},function(err,questions){
            if(err){
               return res.status('500').json({'error':err})
            }
            if(questions){
              console.log(questions);
              return res.status('200').json({'questions':questions});
            }
      });
};

questionController.getQuestionsbyTag = getQuestionsbyTag;
module.exports = questionController;
