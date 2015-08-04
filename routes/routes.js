var express = require('express');
var router = express.Router();
var Question = require('../controllers/questionController');

/* GET all question by tag hardcore. */
router.get('/api/v0.1/question/:tag',Question.getQuestionsbyTag);
router.post('/api/v0.1/question',Question.createQuestion);

module.exports = router;
