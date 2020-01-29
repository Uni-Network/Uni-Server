/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_like', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_id'
      }
    },
    like_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'like_type',
        key: 'like_type_id'
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'post_like'
  });
};
