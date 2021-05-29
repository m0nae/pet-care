import { BuildOptions } from "sequelize";
import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

type DataTypesI = typeof DataTypes;

// todo: add "Food" and "Medication" fields too!

interface PetModel extends Model {
  readonly name: string;
  readonly type: string;
  readonly age: string;
  readonly playAmount: number;
}

type PetModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PetModel;
};

module.exports = (sequelize: Sequelize, DataTypes: DataTypesI) => {
  const Pet = <PetModelStatic>sequelize.define("Pet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // this is a FLOAT because the default age unit will be years
    // which of course can be converted to other units on client-side
    age: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        notEmpty: false,
      },
    },
    // playAmount will only be in minutes for now, so an INTEGER type is fine
    playAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: false,
      },
    },
  });
  return Pet;
};
