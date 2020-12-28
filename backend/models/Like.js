const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
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
    Like.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
      }, {    
        sequelize,
        tableName: 'likes',
        modelName: 'Like'
    });

    return Like;
}



