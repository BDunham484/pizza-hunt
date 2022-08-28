//import express router
const router = require('express').Router();
//import comment-controller methods
const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');
//set up post at api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);

//set up delete at api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;