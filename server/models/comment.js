/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('comment', {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'post',
        key: 'post_id',
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
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'comment',
  });
}
