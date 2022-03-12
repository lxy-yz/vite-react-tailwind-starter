import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "../models/Todo";
import type { Todo } from "../types";

const TodoForm: React.FC<{
  todo?: Todo;
  onSubmit?(e: React.FormEvent<HTMLFormElement>): void;
  onCreate?(todo: Partial<Todo>): void;
  onUpdate?(todo: Partial<Todo>): void;
}> = ({ todo, onSubmit, onCreate, onUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    defaultValues: todo,
    resolver: zodResolver(TodoSchema.omit({ id: true })),
  });

  return (
    <form
      onSubmit={(e) => {
        onSubmit?.(e);
        e.defaultPrevented && e.preventDefault();

        handleSubmit(({ title, completed }) => {
          if (todo) {
            onUpdate?.({
              id: todo.id,
              title,
              completed,
            });
          } else {
            onCreate?.({
              title,
              completed,
            });
          }
        })(e);
      }}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && <span role="alert">{errors.title.message}</span>}
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input id="completed" type="checkbox" {...register("completed")} />
        {errors.completed && (
          <span role="alert">{errors.completed.message}</span>
        )}
      </div>
      <button>submit</button>
    </form>
  );
};

export default TodoForm;
