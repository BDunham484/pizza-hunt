//import express router
const router = require('express').Router();
//import comment-controller methods
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');
//set up post at api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);


//set up delete at api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

//set up a delte at api/comments/:pizzaId/:commentId/replyId
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;