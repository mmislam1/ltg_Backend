import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().min(1),
  height: z.number().min(30),
  weight: z.number().min(10),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
