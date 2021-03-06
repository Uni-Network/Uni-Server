/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('post', {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'group',
        key: 'group_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    freezeTableName: true,
  }, {
    tableName: 'post',
  });
}
