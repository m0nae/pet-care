import { BuildOptions } from "sequelize";
import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

type DataTypesI = typeof DataTypes;

interface MedicationModel extends Model {
  readonly name: string;
  readonly current_doses: number;
  readonly total_doses: number;
  readonly dose_unit: string;
}

type MedicationModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): MedicationModel;
};

module.exports = (sequelize: Sequelize, DataTypes: DataTypesI) => {
  const Medication = <MedicationModelStatic>sequelize.define("Medication", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    current_doses: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    total_doses: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dose_unit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Medication;
};
