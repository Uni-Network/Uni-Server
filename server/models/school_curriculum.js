/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('school_curriculum', {
    school_curriculum_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'option',
        key: 'option_id',
      },
    },
    promo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'promo',
        key: 'promo_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    school_curriculum_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  }, {
    tableName: 'school_curriculum',
  });
}
