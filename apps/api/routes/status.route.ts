import { Router, Request, Response } from 'express';
import StatusGetController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  router.get('/status', (req: Request, res: Response) => new StatusGetController().run(req, res));
};