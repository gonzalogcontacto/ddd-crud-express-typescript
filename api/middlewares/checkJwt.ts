import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers["auth"];
  console.log(token);
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, <Secret>process.env.JWT_SECRET);
    console.log(jwtPayload);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    console.log(error);
    res.status(401).send();
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request

  const newToken = jwt.sign({ jwtPayload }, <Secret>process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};
