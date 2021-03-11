module.exports = app => {
    const posts = require("../controllers/post.controller.js");

    var router = require("express").Router();

    router.post("/create-post", posts.createPost);

    router.get("/get-posts", posts.getAllPosts);

    app.use('/api/posts', router);
};