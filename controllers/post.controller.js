const db = require("../models");
const Post = db.posts;
const Comment = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new Post


exports.createPost = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Post
    const post = {
        title: req.body.title,
        description: req.body.description,
        color: req.body.color,
    };

    // Save Post in the database
    Post.create(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};

// Retrieve all Posts from the database.
exports.getAllPosts = (req, res) => {
    Post.findAll({

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Post."
            });
        });
};


