const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const time = require("../libs/timeLib");

const DiscussionSchema = new Schema(
  {
    ownerTopic: { type: Schema.Types.ObjectId, ref: "Topic" },
    discussionId: { type: String, default: "" },
    discussionName: { type: String, default: "" },
    discussionDescription: { type: String, default: "" },
    discussionCreatedBy: { type: Schema.Types.ObjectId, ref: "User" },
    discussionModifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
    discussionCreatedDate: { type: Date, default: time.now() },
    discussionModifiedDate: { type: Date, default: time.now() },
    completed: { type: Boolean, default: false },
    comments: {
      type: [
        {
          commentedBy: { type: String, default: "" },
          comment: { type: String, default: "" },
          Date: { type: Date, default: Date.now() },
        },
      ],
    },
  },
  {
    usePushEach: true,
  }
);

module.exports = mongoose.model("Discussion", DiscussionSchema);
