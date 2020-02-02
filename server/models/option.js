/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('option', {
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    option_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'option',
  });
}
