import { BuildOptions } from "sequelize";
import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

type DataTypesI = typeof DataTypes;

interface UserModel extends Model {
  name: string;
  email: string;
}

type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

module.exports = (sequelize: Sequelize, DataTypes: DataTypesI) => {
  const User = <UserModelStatic>sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return User;
};
