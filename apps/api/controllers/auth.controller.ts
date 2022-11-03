import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const authController = {
  login: async (req: Request, res: Response) => {
    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: req.body.email, username: req.body.username },
      <Secret>process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(token);
  },
};
