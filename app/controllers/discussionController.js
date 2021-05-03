const shortid = require("shortid");
const time = require("../libs/timeLib");
const response = require("../libs/responseLib");
const logger = require("../libs/loggerLib");
const check = require("../libs/checkLib");
const User = require("../models/User");
const Discussion = require("../models/Discussion");
const Topic = require("../models/Topic");
const ObjectId = require("mongodb").ObjectID;

let addDiscussionFunction = (req, res) => {
  let validateDiscussionInput = () => {
    return new Promise((resolve, reject) => {
      if (
        req.body.discussionName &&
        req.body.discussionCreatedBy &&
        req.body.discussionModifiedBy &&
        req.body.discussionDescription
      ) {
        resolve(req);
      } else {
        logger.error(
          "Field Missing During Discussion Creation",
          "DiscussionController: addDiscussionFunction()",
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
  };

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
              "Discussion Controller: addDiscussionFunction-findUserDetails",
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
              "Discussion  Controller:addDiscussionFunction-findUserDetails"
            );
            let apiResponse = response.generate(
              true,
              "No User Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "User Details Found",
              200,
              userDetails
            );
            resolve(userDetails);
          }
        });
    });
  };

  let addDiscussionItem = () => {
    return new Promise((resolve, reject) => {
      let discussionCreatedById;
      let discussionModifiedById;

      findUserDetails(req.body.discussionCreatedBy)
        .then((id) => {
          discussionCreatedById = id._id;
        })
        .then(() => {
          findUserDetails(req.body.discussionModifiedBy)
            .then((id) => {
              discussionModifiedById = id._id;
            })
            .then(() => {
              Topic.findOne({ _id: req.body.ownerTopic }, (err, topic) => {
                if (err) {
                  console.log(err);
                } else {
                  let newItem = new Discussion({
                    ownerTopic: req.body.ownerTopic,
                    discussionId: shortid.generate(),
                    discussionName: req.body.discussionName,
                    discussionDescription: req.body.discussionDescription,
                    discussionCreatedBy: discussionCreatedById,
                    discussionModifiedBy: discussionModifiedById,
                    discussionCreatedDate: time.now(),
                    discussionModifiedDate: time.now(),
                  });

                  topic.discussions.push(newItem._id);
                  topic.save((err, result) => {
                    if (err) {
                      console.log(err, "error to save Discussion id in Topic");
                    } else {
                      console.log(result);
                    }
                  });
                  newItem.save((err, newItem) => {
                    if (err) {
                      console.log(err);
                      logger.error(
                        err.message,
                        "DiscussionController: addDiscussionItem",
                        10
                      );
                      let apiResponse = response.generate(
                        true,
                        "Failed to add new Discussion Item",
                        500,
                        null
                      );
                      reject(apiResponse);
                    } else {
                      let newItemObj = newItem.toObject();
                      resolve(newItemObj);
                    }
                  });
                }
              });
            });
        });
    });
  };

  validateDiscussionInput(req, res)
    .then(addDiscussionItem)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Discussion Created",
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

let addCommentFunction = (req, res) => {
  let validateDiscussionInput = () => {
    return new Promise((resolve, reject) => {
      if (req.body.id && req.body.commentedBy && req.body.comment) {
        resolve(req);
      } else {
        logger.error(
          "Field Missing During Comment Creation",
          "DiscussionController: addDiscussionFunction()",
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
  };

  let addComment = () => {
    let subOptions = {
      commentedBy: req.body.commentedBy,
      comment: req.body.comment,
    };

    let options = {
      $push: {
        comments: { $each: [subOptions] },
      },
    };

    console.log(subOptions);

    return new Promise((resolve, reject) => {
      Discussion.updateOne({ discussionId: req.body.id }, options).exec(
        (err, result) => {
          if (err) {
            logger.error(
              err.message,
              "Discussion Controller: Add Comment-DiscussionController",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Update Discussion",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info(
              "Discussion not Found",
              "Discussion Controller: Add Comment-DiscussionController"
            );
            let apiResponse = response.generate(
              true,
              "Discussion not Found",
              404,
              null
            );
            reject(apiResponse);
          } else {
            let apiResponse = response.generate(
              false,
              "Updated Discussion with Comment",
              200,
              null
            );
            resolve(apiResponse);
          }
        }
      );
    });
  };

  validateDiscussionInput(req, res)
    .then(addComment)
    .then((resolve) => {
      let apiResponse = response.generate(false, "Comment Added", 200, resolve);
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let getAllDiscussionsFunction = (req, res) => {
  let findItems = (req, res) => {
    return new Promise((resolve, reject) => {
      Discussion.find({ ownerTopic: ObjectId(req.params.id) }).count(
        (err, result) => {
          if (err) {
            console.log(err);
            logger.error(
              err.message,
              "DiscussionController: getAllDiscussion",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Find Discussion Details",
              500,
              null
            );
            res.send(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info(
              "No Discussion Found",
              "DiscussionController: getAllDiscussion"
            );
            let apiResponse = response.generate(
              true,
              "No Discussion Found",
              404,
              null
            );
            res.send(apiResponse);
          } else {
            let count = result;
            let pageNumber = parseInt(req.query.pageIndex);
            let nPerPage = parseInt(req.query.pageSize);
            Discussion.find({ ownerTopic: ObjectId(req.params.id) })
              .select()
              .skip(pageNumber > 0 ? pageNumber * nPerPage : 0)
              .limit(nPerPage)
              .populate("discussionCreatedBy")
              .populate("discussionModifiedBy")
              .lean()
              .exec((err, ItemDetails) => {
                if (err) {
                  console.log(err);
                  logger.error(
                    err.message,
                    "Item Controller: findDiscussion",
                    10
                  );
                  let apiResponse = response.generate(
                    true,
                    "Failed To Find Discussion Items",
                    500,
                    null
                  );
                  reject(apiResponse);
                } else if (check.isEmpty(ItemDetails)) {
                  logger.info(
                    "No Item Found",
                    "Discussion  Controller:findDiscussion"
                  );
                  let apiResponse = response.generate(
                    true,
                    "No Discussion Item Found",
                    404,
                    null
                  );
                  reject(apiResponse);
                } else {
                  let apiResponse = response.generate(
                    false,
                    "Discussions Found and Topiced",
                    200,
                    ItemDetails
                  );
                  apiResponse.count = count;
                  resolve(apiResponse);
                }
              });
          }
        }
      );
    });
  };

  findItems(req, res)
    .then((resolve) => {
      res.send(resolve);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let getDiscussionDetails = (req, res) => {
  Discussion.find({ discussionId: req.params.id })
    .select()
    .populate("discussionCreatedBy")
    .populate("discussionModifiedBy")
    .lean()
    .exec((err, discussionDetails) => {
      if (err) {
        console.log(err);
        logger.error(
          err.message,
          "Discussion Controller: getDiscussionDetails()",
          10
        );
        let apiResponse = response.generate(
          true,
          "Failed To Find Discussion Details",
          500,
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
        res.send(discussionDetails);
      }
    });
};

let getAllDiscussionsByTopicId = (req, res) => {
  let findTopicDetails = (req, res) => {
    return new Promise((resolve, reject) => {
      Topic.findOne({ TopicId: req.params.topicId })
        .select()
        .lean()
        .exec((err, TopicDetails) => {
          if (err) {
            console.log(err);
            logger.error(
              err.message,
              "Discussion Controller: getAllDiscussionsByTopicId-findTopicDetails",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Find Topic Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(TopicDetails)) {
            logger.info(
              "No Topic Found",
              "Discussion  Controller:getAllDiscussionsByTopicId-findTopicDetails"
            );
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
  };

  let getDiscussionById = (TopicDetails) => {
    return new Promise((resolve, reject) => {
      Discussion.find({ ownerTopic: TopicDetails._id })
        .select()
        .lean()
        .exec((err, TopicDetails) => {
          if (err) {
            console.log(err);
            logger.error(
              err.message,
              "Discussion Controller: getAllDiscussionsByTopicId-getDiscussionById",
              10
            );
            let apiResponse = response.generate(
              true,
              "Failed To Find Discussion Details",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(TopicDetails)) {
            logger.info(
              "No Discussion Found",
              "Discussion Controller: getAllDiscussionsByTopicId-getDiscussionById"
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
              TopicDetails
            );
            resolve(TopicDetails);
          }
        });
    });
  };

  findTopicDetails(req, res)
    .then(getDiscussionById)
    .then((resolve) => {
      console.log(resolve);
      let apiResponse = response.generate(
        false,
        "Discussion Details Found",
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

module.exports = {
  addDiscussionFunction: addDiscussionFunction,
  getAllDiscussionsFunction: getAllDiscussionsFunction,
  getDiscussionDetails: getDiscussionDetails,
  getAllDiscussionsByTopicId: getAllDiscussionsByTopicId,
  addCommentFunction: addCommentFunction,
};
