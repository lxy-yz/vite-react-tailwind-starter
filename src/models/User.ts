import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

export type User = z.infer<typeof UserSchema>;
