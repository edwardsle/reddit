const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Group extends Model {}

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



