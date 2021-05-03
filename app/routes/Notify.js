const express = require('express');
const router = express.Router();
const discussionController = require("./../../app/controllers/discussionController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');
const notifyController = require("./../controllers/notifyController");

module.exports.setRouter=(app)=>{

    let baseUrl = `${appConfig.apiVersion}/notification`;

      app.get(`${baseUrl}/:userId/notification`, auth.isAuthorized, notifyController.getNotifyById);
   
      app.post(`${baseUrl}/saveNotification`,auth.isAuthorized,notifyController.saveNotification);
    

}