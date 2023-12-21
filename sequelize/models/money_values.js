'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoneyValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.treasures, {
        foreignKey: "treasure_id",
        through: "treasures",
        as: "treasures",
      })
    }
  }
  MoneyValues.init({
    treasure_id: DataTypes.INTEGER,
    amt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MoneyValues',
    tableName: 'money_values',
    underscored: true
  });
  return MoneyValues;
};