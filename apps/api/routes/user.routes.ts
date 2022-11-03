import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { checkJwt } from "../middlewares/checkJwt";

const UsersRouter = Router();

UsersRouter.get("/", userController.index);
UsersRouter.post("/", /*checkJwt,*/ userController.create);
UsersRouter.get("/:id", userController.detail);
UsersRouter.get("/:id/orders", userController.orders);

export default UsersRouter;
