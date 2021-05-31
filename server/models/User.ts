import { DataTypes, Sequelize } from "sequelize";
import { UserModelStatic } from "../typings/models/user";
const sequelize = require("sequelize");

type DataTypesI = typeof DataTypes;

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
