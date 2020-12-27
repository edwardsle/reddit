const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate({ User, Post, Comment }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
            });
            this.belongsTo(Post, {
                foreignKey: 'postId',
            });
            this.belongsTo(Comment, {
                foreignKey: 'commentId',
            });
        }
    }
    Post.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "liked"
        }
      }, {    
        sequelize,
        tableName: 'likes',
        modelName: 'Like'
    });

    return Post;
}



