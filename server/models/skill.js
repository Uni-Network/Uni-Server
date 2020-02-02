/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('skill', {
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skill_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'skill',
  });
}
