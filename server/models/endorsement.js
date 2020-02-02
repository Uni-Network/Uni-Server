/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('endorsement', {
    endorser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    user_skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_skill',
        key: 'user_skill_id',
      },
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'endorsement',
  });
}
