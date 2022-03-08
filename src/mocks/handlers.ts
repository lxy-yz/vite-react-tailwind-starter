import { rest } from "msw";
import type { Todo } from "../types";

let todos: Todo[] = [];

export const handlers = [
  rest.post("/api/todos", (req, res, ctx) => {
    const body = req.body as Pick<Todo, "title" | "completed">;
    const newTodo = { ...body, id: uid() };

    // create
    todos = [...todos, newTodo];

    return res(
      ctx.status(200),
      ctx.json({
        message: "success",
        data: newTodo,
      })
    );
  }),

  rest.get("/api/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "success",
        data: todos,
      })
    );
  }),
];

// https://gist.github.com/gordonbrander/2230317
function uid() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
