import * as Express from "express";
import { User, UserModelI, UserModelStatic } from "../typings/models/user";

type ControllerT<T> = (req: Express.Request, res: Express.Response) => T;

interface UserControllerI {
  getAll: ControllerT<Promise<UserModelI[] | null>>;
  getById: ControllerT<Promise<UserModelI | null>>;
  create: ControllerT<Promise<UserModelI>>;
  delete: ControllerT<Promise<UserModelI | string>>;
}

export const userController: UserControllerI = {
  async create(req: Express.Request, res: Express.Response) {
    let user = await User.create({
      name: "Sam",
      email: "sam@email.com",
    });

    return user.dataValues;
  },

  async getById(req: Express.Request, res: Express.Response) {
    let user = await User.findByPk(req.params.id);
    console.log(user);
    return user;
  },

  async getAll(req: Express.Request, res: Express.Response) {
    let users = await User.findAll();
    return users;
  },

  async delete(req: Express.Request, res: Express.Response) {
    let selectedUser: UserModelI | null = await User.findByPk(req.params.id);
    if (!selectedUser) {
      let message = "User not found.";
      console.log(message);
      return message;
    } else {
      selectedUser.destroy();
      return selectedUser;
    }
  },
};
