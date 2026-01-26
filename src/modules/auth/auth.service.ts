import { User } from "../../models/user.model";
import { hashPassword, comparePassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

export const signupUser = async (data: any) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new Error("User already exists");

  data.password = await hashPassword(data.password);
  const user = await User.create(data);

  return signToken({ id: user._id });
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  return signToken({ id: user._id });
};
