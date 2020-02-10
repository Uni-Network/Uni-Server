/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('user_groups', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'theuser',
        key: 'user_id',
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'group',
        key: 'group_id',
      },
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'user_groups',
  });
}
