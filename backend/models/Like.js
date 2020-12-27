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
        static associate({ Comment }) {
            this.belongsTo(Post, {
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



