const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate({ User }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
            });
        }
        static associate({ Post }) {
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



