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

  rest.put("/api/todos/:id", (req, res, ctx) => {
    const id = req.params.id;
    const body = req.body as Pick<Todo, "title" | "completed">;

    // update
    todos = todos.map((todo) => (todo.id === id ? { ...todo, ...body } : todo));

    return res(
      ctx.status(200),
      ctx.json({
        message: "success",
      })
    );
  }),

  rest.get("/api/todos/:id", (req, res, ctx) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id === id);

    return res(
      ctx.status(200),
      ctx.json({
        message: "success",
        data: todo,
      })
    );
  }),

  rest.delete("/api/todos/:id", (req, res, ctx) => {
    const id = req.params.id;

    // delete
    todos = todos.filter((todo) => todo.id !== id);

    return res(
      ctx.status(200),
      ctx.json({
        message: "success",
      })
    );
  }),
];

// https://gist.github.com/gordonbrander/2230317
function uid() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
