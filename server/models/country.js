/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('country', {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    iso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nicename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    iso3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phonecode: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'country',
  });
}
