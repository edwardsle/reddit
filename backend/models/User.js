const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {        
        static associate({ Group }) {
            this.belongsTo(Group, {
                foreignKey: 'groupId',
            });
        }

      
        toJSON() {
            return { ...this.get(), id: undefined }
        }
    }
    User.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {    
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });

    return User;
}


