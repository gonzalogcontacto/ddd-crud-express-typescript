import { Request, Response } from "express";
import commandBus from "../config/commandBus";
import { CreateUserCommand } from "../commands/CreateUserCommand";

export const userController = {
  index: async (req: Request, res: Response) => {},
  detail: async (req: Request, res: Response) => {},
  orders: async (req: Request, res: Response) => {},
  create: async (req: Request, res: Response) => {
    try {
      const createAccountCommand = new CreateUserCommand({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      commandBus.handle(createAccountCommand);

      res.sendStatus(201);
    } catch (e) {
      res.sendStatus(500).json(e);
    }
  },
};
