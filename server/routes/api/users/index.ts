import * as Express from "express";
import { userController } from "../../../controllers/user";
import express from "express";
let router = express.Router();

router.get("/", async (req: Express.Request, res: Express.Response) => {
  let results = await userController.getAll(req, res);
  return res.json(results);
});

router.get("/:id", async (req: Express.Request, res: Express.Response) => {
  let results = await userController.getById(req, res);
  return res.json(results);
});

router.post("/", async (req: Express.Request, res: Express.Response) => {
  let data = await userController.create(req, res);
  return res.json(data);
});

router.delete("/:id", async (req: Express.Request, res: Express.Response) => {
  let data = await userController.delete(req, res);
  return res.json(data);
});

module.exports = router;
