const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const time = require('../libs/timeLib');

const TopicSchema=new Schema({
    topicId:{type:String,default:''},
    topicName:{type:String,default:''},
    topicCreatedBy: { type: Schema.Types.ObjectId, ref: "User" },
    topicModifiedBy:{type: Schema.Types.ObjectId, ref:"User"},
    topicCreatedDate:{type:Date,default:time.now()},
    topicModifiedDate:{type:Date,default:time.now()},
    discussions:[{type:Schema.Types.ObjectId,ref:"Discussion"}]
},{
    usePushEach: true
  })


module.exports=mongoose.model('Topic',TopicSchema);