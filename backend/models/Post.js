const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate({ User }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
            });
        }
    }
    Post.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        }
      }, {    
        sequelize,
        tableName: 'posts',
        modelName: 'Post'
    });

    return Post;
}



