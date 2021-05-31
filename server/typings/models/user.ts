import { Model, BuildOptions } from "sequelize";
const { User: UserT } = require("../../models");

// Model interfaces
export interface UserModelI extends Model {
  name: string;
  email: string;
}

// Model Static Types
export type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModelI;
};

export const User: UserModelStatic = UserT;
