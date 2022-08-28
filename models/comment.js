//import necessary dependencies
const { Schema, model } = require('mongoose');
//import dateFormat util
const dateFormat = require('../utils/dateFormat');


//crete the schema for the model using the Schema constructor
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
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
}
);



//create the comment model using the modelSchema
const Comment = model('Comment', CommentSchema);

//export the comment model
module.exports = Comment;