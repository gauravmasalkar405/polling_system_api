const express = require("express");

// importing questionsControllers
const question = require("../controllers/question");

// importing optionsContronller
const options = require("../controllers/option");

// initializing router
const router = express.Router();

//adding a route for creating a quetions
router.post("/questions/create", question.createQuestion);

// adding a route for creating options
router.post("/questions/:id/options/create", options.addOption);

// adding a route for deleting an question
router.get("/questions/:id/delete", question.deleteQuestion);

// adding a route for deleting  an options
router.get("/options/:id/delete", options.deleteOption);

// adding a route for increaing the vote for an option
router.get("/options/:id/add_vote", options.incrementVotes);

// adding a route for getting the details of a particular question
router.get("/questions/:id", question.getQuestionDetails);

// exporting router
module.exports = router;
