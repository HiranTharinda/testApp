module.exports = app => {
    const comment = require("../controllers/comment.controller.js");

    var router = require("express").Router();

    router.post("/create-comment", comment.createComment);

    app.use('/api/comments', router);

};