import React from "react";
import { useForm } from "react-hook-form";
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
  } = useForm<Todo>({ defaultValues: todo });

  return (
    <form
      onSubmit={(e) => {
        onSubmit?.(e);
        e.defaultPrevented && e.preventDefault();

        handleSubmit(({ id, title, completed }) => {
          if (todo) {
            onUpdate?.({
              id,
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
        <input
          id="title"
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <span role="alert">{errors.title.message}</span>}
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          type="checkbox"
          {...register("completed", { required: false })}
        />
        {errors.completed && (
          <span role="alert">{errors.completed.message}</span>
        )}
      </div>
      <button>submit</button>
    </form>
  );
};

export default TodoForm;
