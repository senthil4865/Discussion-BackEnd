const express = require('express');
const router = express.Router();
const appConfig = require("../../config/appConfig");
const auth = require('../middlewares/auth');
const topicController = require("../controllers/topicController");

module.exports.setRouter=(app)=>{

     let baseUrl = `${appConfig.apiVersion}/topics`;
     app.post(`${baseUrl}/addTopic`, auth.isAuthorized, topicController.addTopicFunction);

     app.get(`${baseUrl}/getAll`,auth.isAuthorized,topicController.getAllTopicsFunction);
  
     app.post(`${baseUrl}/:topicId/updateTopic`, auth.isAuthorized, topicController.updateTopicFunction);
  
     app.post(`${baseUrl}/:topicId/deleteTopic`, auth.isAuthorized, topicController.deleteTopicFunction);
   
}