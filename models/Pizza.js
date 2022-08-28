//import necessary dependencies
const { Schema, model } = require('mongoose');
//create the schema for the model using the Schema constructor
const PizzaSchema = new Schema({
        //create fields
        pizzaName: {
            type: String
        },
        createdBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        size: {
            type: String,
            default: 'Large'
        },
        toppings: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//get total count of comments and replies on retrival
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;