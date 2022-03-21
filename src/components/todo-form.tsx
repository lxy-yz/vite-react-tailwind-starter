import type { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "../models/Todo";
import type { Todo } from "../types";

const TodoForm = ({
  todo,
  onSubmit,
  onCreate,
  onUpdate,
}: {
  todo?: Todo;
  onSubmit?(e: FormEvent<HTMLFormElement>): void;
  onCreate?(todo: Partial<Todo>): void;
  onUpdate?(todo: Partial<Todo>): void;
}) => {
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
      <div className="mt-4 flex flex-col">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && <span role="alert">{errors.title.message}</span>}
      </div>
      <div className="mt-4 flex flex-row items-center gap-2">
        <label htmlFor="completed">Completed</label>
        <input id="completed" type="checkbox" {...register("completed")} />
        {errors.completed && (
          <span role="alert">{errors.completed.message}</span>
        )}
      </div>
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 text-white bg-blue-500 hover:bg-sky-500">
          submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
