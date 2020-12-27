const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate({ User, Post }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
            });
            this.belongsTo(Post, {
                foreignKey: 'postId',
            });
        }
    }
    Post.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT
        }
      }, {    
        sequelize,
        tableName: 'comments',
        modelName: 'Comment'
    });

    return Post;
}



