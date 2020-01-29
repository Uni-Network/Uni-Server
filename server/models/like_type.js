/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like_type', {
    like_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    like_type_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'like_type'
  });
};
