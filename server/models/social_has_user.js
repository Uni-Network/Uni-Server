/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('social_has_user', {
    social_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'social',
        key: 'social_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'theuser',
        key: 'user_id',
      },
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'social_has_user',
  });
}
