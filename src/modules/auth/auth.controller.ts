import { Request, Response } from "express";
import { signupUser, loginUser } from "./auth.service";
import { signupSchema, loginSchema } from "./auth.validation";

export const signup = async (req: Request, res: Response) => {
  const data = signupSchema.parse(req.body);
  const token = await signupUser(data);
  res.status(201).json({ token });
};

export const login = async (req: Request, res: Response) => {
  const data = loginSchema.parse(req.body);
  const token = await loginUser(data.email, data.password);
  res.json({ token });
};
