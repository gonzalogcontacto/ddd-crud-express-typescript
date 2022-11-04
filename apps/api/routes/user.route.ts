import { Router, Request, Response } from 'express';
import { UserPostController } from '../controllers/UserPostController';

export const register = (router: Router) => {
  router.put('/users/:id', (req: Request, res: Response) => new UserPostController().run(req, res));
};