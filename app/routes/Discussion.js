const express = require('express');
const router = express.Router();
const discussionController = require("../controllers/discussionController");
const appConfig = require("../../config/appConfig");
const auth = require('../middlewares/auth');
const notifyController = require("../controllers/notifyController");


module.exports.setRouter=(app)=>{

     let baseUrl = `${appConfig.apiVersion}/discussion`;

       app.post(`${baseUrl}/addDiscussion`,discussionController.addDiscussionFunction);

        app.post(`${baseUrl}/addComment`,discussionController.addCommentFunction);

       app.get(`${baseUrl}/:id/getAllDiscussions`, discussionController.getAllDiscussionsFunction);
       
       app.get(`${baseUrl}/:id/discussionDetails`, discussionController.getDiscussionDetails);

       app.get(`${baseUrl}/:topicId/getTopicById`,auth.isAuthorized,discussionController.getAllDiscussionsByTopicId);
    
        

}

