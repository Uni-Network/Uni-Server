/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('social', {
    social_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    social_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'social'
  });
};
