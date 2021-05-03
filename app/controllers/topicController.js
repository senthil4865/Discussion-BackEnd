const mongoose = require("mongoose");
const shortid = require("shortid");
const time = require("../libs/timeLib");
const response = require("../libs/responseLib");
const logger = require("../libs/loggerLib");
const check = require("../libs/checkLib");
const emailLib = require("../libs/emailLib");
const User = require("../models/User");
const Notify = require("../models/Notify");
const Topic = require("../models/Topic");
const ObjectId = require("mongodb").ObjectID;
const Discussion = require("../models/Discussion");

let addTopicFunction = (req, res) => {
  console.log(req.body, "req body");
  let validateUserInput = () => {
    return new Promise((resolve, reject) => {
      if (
        req.body.topicName &&
        req.body.topicCreatedBy &&
        req.body.topicModifiedBy
      ) {
        resolve(req);
      } else {
        logger.error(
          "Field Missing During Topic Creation",
          "TopicController: addTopic()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  }; // end validate user input

  let findUserDetails = (value) => {
    return new Promise((resolve, reject) => {
      User.findOne({ userId: value })
        .select("_id")
        .lean()
        .exec((err, discussionDetails) => {
          if (err) {
            console.log(err);
            logger.error(
              err.message,
              "Discussion Controller: findDiscussionDetails",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Find Discussion Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(discussionDetails)) {
            logger.info(
              "No Discussion Found",
              "Discussion  Controller:findDiscussionDetails"
            );
            let apiResponse = response.generate(
              true,
              "No Discussion Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Discussion Details Found",
              200,
              discussionDetails
            );
            resolve(discussionDetails);
          }
        });
    });
  };
  let addTopic = () => {
    return new Promise((resolve, reject) => {
      let TopicCreatedById;
      let TopicModifiedById;

      findUserDetails(req.body.topicCreatedBy)
        .then((id) => {
          console.log(id, "id");
          console.log(id._id, "created id");
          TopicCreatedById = id._id;
        })
        .then(() => {
          findUserDetails(req.body.topicModifiedBy)
            .then((id) => {
              console.log(id);
              console.log(id._id, "modified id");
              TopicModifiedById = id._id;
            })
            .then(() => {
              //console.log(req.body)
              let newTopic = new Topic({
                topicId: shortid.generate(),
                topicName: req.body.topicName,
                topicCreatedBy: TopicCreatedById,
                topicModifiedBy: TopicModifiedById,
                topicCreatedDate: time.now(),
                topicModifiedDate: time.now(),
              });

              console.log(newTopic, "new Topic");
              newTopic.save((err, newTopic) => {
                if (err) {
                  console.log(err);
                  logger.error(err.message, "TopicController: addTopic", 10);
                  let apiResponse = response.generate(
                    true,
                    "Failed to add new Topic",
                    500,
                    null
                  );
                  reject(apiResponse);
                } else {
                  let newTopicObj = newTopic.toObject();
                  resolve(newTopicObj);
                }
              });
            });
        });
    });
  }; // end addTopic function

  validateUserInput(req, res)
    .then(addTopic)
    .then((resolve) => {
      let apiResponse = response.generate(false, "Topic Created", 200, resolve);
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}; // end addTopicFunction

let getAllTopicsFunction = (req, res) => {
  console.log(req.params.userId, "req params userid");
  let findAllTopics = () => {
    return new Promise((resolve, reject) => {
      Topic.find({})
        .select()
        .lean()
        .exec((err, topicDetails) => {
          if (err) {
            console.log(err);
            logger.error(err.message, "Topic Controller: getAllTopics", 10);
            let apiResponse = response.generate(
              true,
              "Failed To Find User Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(topicDetails)) {
            logger.info("No User Found", "Topic  Controller:getAllTopics");
            let apiResponse = response.generate(
              true,
              "No User Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            resolve(topicDetails);
          }
        });
    });
  }; // end finduserDetails

  findAllTopics(req, res)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "All Topics found",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let updateTopicFunction = (req, res) => {
  let findUserDetails = (value) => {
    return new Promise((resolve, reject) => {
      User.findOne({ userId: value })
        .select("_id")
        .lean()
        .exec((err, userDetails) => {
          if (err) {
            console.log(err);
            logger.error(
              err.message,
              "Discussion Controller: findDiscussionDetails",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Find Discussion Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(userDetails)) {
            logger.info(
              "No Discussion Found",
              "Discussion  Controller:findDiscussionDetails"
            );
            let apiResponse = response.generate(
              true,
              "No Discussion Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Discussion Details Found",
              200,
              userDetails
            );
            resolve(userDetails);
          }
        });
    });
  };

  let findTopicDetails = () => {
    return new Promise((resolve, reject) => {
      Topic.findOne({ TopicId: req.params.topicId })
        .select()
        .lean()
        .exec((err, TopicDetails) => {
          if (err) {
            console.log(err);
            logger.error(err.message, "Topic Controller: findTopicDetails", 10);
            let apiResponse = response.generate(
              true,
              "Failed To Find Topic Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(TopicDetails)) {
            logger.info("No Topic Found", "Topic  Controller:findTopicDetails");
            let apiResponse = response.generate(
              true,
              "No Topic Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Topic Details Found",
              200,
              TopicDetails
            );
            resolve(TopicDetails);
          }
        });
    });
  }; // end findTopicdetails

  let updateTopic = (TopicDetails) => {
    return new Promise((resolve, reject) => {
      let TopicModifiedById;
      console.log(req.body.TopicModifiedBy, "topic modified by");
      findUserDetails(req.body.TopicModifiedBy)
        .then((id) => {
          TopicModifiedById = id._id;
        })
        .then(() => {
          let options = {
            TopicName: req.body.TopicName,
            TopicModifiedBy: TopicModifiedById,
            TopicModifiedDate: time.now(),
          };
          Topic.update({ TopicId: req.params.topicId }, options).exec(
            (err, result) => {
              if (err) {
                console.log(err);
                logger.error(err.message, "Topic Controller:updateTopic", 10);
                let apiResponse = response.generate(
                  true,
                  "Failed To Update Topic details",
                  500,
                  null
                );
                reject(apiResponse);
              } else if (check.isEmpty(result)) {
                logger.info("No Topic Found", "Topic Controller:updateTopic");
                let apiResponse = response.generate(
                  true,
                  "No Topic Found",
                  404,
                  null
                );
                reject(apiResponse);
              } else {
                console.log(result, "update result");
                let apiResponse = response.generate(
                  false,
                  "Topic details Updated",
                  200,
                  result
                );
                resolve(apiResponse);
              }
            }
          ); // end Topic model update
        });
    });
  }; // end updateTopic function

  findTopicDetails(req, res)
    .then(updateTopic)
    .then((resolve) => {
      //let apiResponse = response.generate(false, 'Topic Updated', 200, "None")
      res.send(resolve);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}; // end updateTopicFunction

let deleteTopicFunction = (req, res) => {
  let findTopicDetails = () => {
    return new Promise((resolve, reject) => {
      Topic.findOne({ TopicId: req.params.topicId })
        .select()
        .lean()
        .exec((err, TopicDetails) => {
          if (err) {
            console.log(err);
            logger.error(err.message, "Topic Controller: findTopicDetails", 10);
            let apiResponse = response.generate(
              true,
              "Failed To Find Topic Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(TopicDetails)) {
            logger.info("No Topic Found", "Topic  Controller:findTopicDetails");
            let apiResponse = response.generate(
              true,
              "No Topic Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Topic Details Found",
              200,
              TopicDetails
            );
            resolve(TopicDetails);
          }
        });
    });
  }; // end validate user input

  let deleteTopic = (TopicDetails) => {
    return new Promise((resolve, reject) => {
      Topic.findOneAndRemove({ TopicId: req.params.topicId }).exec(
        (err, result) => {
          if (err) {
            console.log(err);
            logger.error(err.message, "Topic Controller: deleteTopic", 10);
            let apiResponse = response.generate(
              true,
              "Failed To delete Topic",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info("No Topic Found", "Topic Controller: deleteTopic");
            let apiResponse = response.generate(
              true,
              "No Topic Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Deleted the Topic successfully",
              200,
              null
            );
            resolve(apiResponse);
          }
        }
      ); // end Topic model find and remove
    });
  }; // end deleteTopic function

  findTopicDetails()
    .then(findTopicDetails)
    .then(deleteTopic)
    .then((resolve) => {
      res.send(resolve);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}; // end deleteTopicFunction

let getTopicDetails = (req, res) => {
  Topic.findOne({ TopicId: req.params.topicId })
    .select()
    .lean()
    .exec((err, TopicDetails) => {
      if (err) {
        console.log(err);
        logger.error(err.message, "Topic Controller: getTopicDetails", 10);
        let apiResponse = response.generate(
          true,
          "Failed To Find Topics",
          500,
          null
        );
        res.send(apiResponse);
      } else if (check.isEmpty(TopicDetails)) {
        logger.info(
          "No Topic Found",
          "Topic  Controller:getTopicDetailsFunction"
        );
        let apiResponse = response.generate(true, "No Topic Found", 404, null);
        res.send(apiResponse);
      } else {
        let apiResponse = response.generate(
          false,
          "Topic Found",
          200,
          TopicDetails
        );
        res.send(apiResponse);
      }
    });
};


module.exports = {
  addTopicFunction: addTopicFunction,
  updateTopicFunction: updateTopicFunction,
  deleteTopicFunction: deleteTopicFunction,
  getAllTopicsFunction: getAllTopicsFunction,
  getTopicDetails: getTopicDetails
};
