const express = require("express");
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig");
const auth = require("./../middlewares/auth");

module.exports.setRouter = app => {
  let baseUrl = `${appConfig.apiVersion}/users`;

  app.post(`${baseUrl}/signup`, userController.signUpFunction);

  app.post(`${baseUrl}/login`, userController.loginFunction);
  
  app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);
 
  app.put(`${baseUrl}/updatePassword`, userController.updatePasswordFunction);
  
  app.put(`${baseUrl}/verifyEmail`, userController.verifyEmailFunction);
  
  app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
  
  app.get(
    `${baseUrl}/:userId/details`,
    auth.isAuthorized,
    userController.getSingleUser
  );
  
  app.post(
    `${baseUrl}/:userId/logout`,
    auth.isAuthorized,
    userController.logout
  );
 
};

