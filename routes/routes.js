var express = require('express');
var router = express.Router();
var Question = require('../controllers/questionController');
var Answer = require('../controllers/answerController');

/* GET all question by tag hardcore. */
router.get('/api/v0.1/question/:tag',Question.getQuestionsbyTag);
router.post('/api/v0.1/question',Question.createQuestion);

/* GET all answers by question by tag hardcore. */
router.get('/api/v0.1/answer/:question',Answer.getAnswersbyQuestion);
router.post('/api/v0.1/answer',Answer.createAnswer);




module.exports = router;
