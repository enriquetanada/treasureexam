'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treasures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.MoneyValues, {
        foreignKey: "treasure_id",
        through: "MoneyValues",
        as: "moneyvalues",
        otherKey: 'id',
      })
    }
  }
  treasures.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'treasures',
    tableName: 'treasures',
    underscored: true
  });
  return treasures;
};