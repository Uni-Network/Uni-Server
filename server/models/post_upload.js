/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('post_upload', {
    post_upload_id: {
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
    post_upload_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_upload_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'post_upload',
  });
}
