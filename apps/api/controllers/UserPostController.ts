

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateUserCommand } from '../commands/CreateUserCommand';
//import commandBus from '../config/commandBus';
import { Controller } from './Controller';

export class UserPostController implements Controller {
  constructor() {}

  async run(req: Request, res: Response) {
    const createAccountCommand = new CreateUserCommand({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      //commandBus.handle(createAccountCommand);

    res.status(httpStatus.CREATED).send();
  }
}