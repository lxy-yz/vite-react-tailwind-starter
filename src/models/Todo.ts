import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().nonempty({ message: "Title is required" }),
  completed: z.boolean().optional(),
});

export type Todo = z.infer<typeof TodoSchema>;
