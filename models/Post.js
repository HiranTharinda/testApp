module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
  });

  Post.associate = function (models) {
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  }
  return Post;
};