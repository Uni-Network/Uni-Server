/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('comment_like', {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(comment_like_comment_like_id_seq::regclass)',
      primaryKey: true,
      references: {
        model: 'comment',
        key: 'comment_id',
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
    like_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'like_type',
        key: 'like_type_id',
      },
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'comment_like',
  });
}
