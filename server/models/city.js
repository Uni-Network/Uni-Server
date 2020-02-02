/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('city', {
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'country',
        key: 'country_id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'city',
  });
}
