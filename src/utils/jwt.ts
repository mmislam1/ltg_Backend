import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export const signToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
};
