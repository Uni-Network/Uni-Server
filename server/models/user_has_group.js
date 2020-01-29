/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_has_group', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'group',
        key: 'group_id'
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'user_has_group'
  });
};
