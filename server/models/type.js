/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'type'
  });
};
