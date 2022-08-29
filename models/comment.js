//import necessary dependencies
const { Schema, model, Types } = require('mongoose');
//import dateFormat util
const dateFormat = require('../utils/dateFormat');

//create the replay schema using the schema contructor
const ReplySchema = new Schema(
    //create fields
    {
        //set custom id to avoid confusion with parnet comment_id
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String
        },
        writtenBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }  
    }
);


//create the schema for the model using the Schema constructor
const CommentSchema = new Schema({
    //create fields
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    replies: [ReplySchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

//get total count of replies on retrieval
CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

//create the comment model using the modelSchema
const Comment = model('Comment', CommentSchema);

//export the comment model
module.exports = Comment;