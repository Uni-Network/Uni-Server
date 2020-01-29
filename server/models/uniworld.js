/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uniworld', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'uniworld'
  });
};
