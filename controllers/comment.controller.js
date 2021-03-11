const db = require("../models");
const Comment = db.comments
const Op = db.Sequelize.Op;

// Create and Save a new Comment


exports.createComment = (req, res,) => {
    // Validate request
    if (!req.body.text) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Comment
    const comment = {
        postId: 1,
        text: req.body.text,
    };

    // Save Comment in the database
    Comment.create(comment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the comment."
            });
        });
};