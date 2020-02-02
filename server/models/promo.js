/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('promo', {
    promo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    promo_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'promo',
  });
}
