/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('gender', {
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gender_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'gender',
  });
}
