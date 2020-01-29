/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'group'
  });
};
