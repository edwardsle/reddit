const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        static associate({ User }) {
            this.belongsToMany(User, {
                through: 'member',
                foreignKey: 'groupId',
            });
        }
      
        toJSON() {
            return { ...this.get(), id: undefined }
        }
    }

    Group.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gname: {
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {    
        sequelize,
        tableName: 'groups',
        modelName: 'Group'
    });

    return Group;
}



