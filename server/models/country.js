/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'country'
  });
};
