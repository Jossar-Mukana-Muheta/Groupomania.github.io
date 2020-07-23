'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Commentaire.belongsTo(models.User, {
        foreignKey:{
          name: 'uid',
          allowNull:false
        }
      }),
      models.Commentaire.belongsTo(models.Article, {
        foreignKey:{
          name: 'aid',
          allowNull:false
        }
      })
    }
  };
  Commentaire.init({
    idUSERS: DataTypes.INTEGER,
    idARTICLES: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentaire',
  });
  return Commentaire;
};