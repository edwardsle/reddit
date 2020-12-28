const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate({ User, Post }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
            });
            this.belongsTo(Post, {
                foreignKey: 'postId',
            });
        }
    }
    Comment.init({
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

    return Comment;
}



