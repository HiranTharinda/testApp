module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        postId: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        },
    });

    return Comment;
};