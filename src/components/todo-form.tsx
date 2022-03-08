import React from "react";
import type { Todo } from "../types";

const TodoForm: React.FC<{
  todo?: Todo;
  onSubmit?(e: React.FormEvent<HTMLFormElement>): void;
  onCreate?(todo: Partial<Todo>): void;
  onUpdate?(todo: Partial<Todo>): void;
}> = ({ todo, onSubmit, onCreate, onUpdate }) => {
  return (
    <form
      onSubmit={(e) => {
        onSubmit && onSubmit(e);
        if (e.defaultPrevented) return;
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        if (todo) {
          onUpdate?.({
            id: todo.id,
            title: formData.get("title") as string,
            completed: formData.get("completed") === "on",
          });
        } else {
          onCreate?.({
            title: formData.get("title") as string,
            completed: formData.get("completed") === "on",
          });
        }
      }}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={todo?.title}
        />
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          type="checkbox"
          name="completed"
          defaultChecked={todo?.completed}
        />
      </div>
      <button>submit</button>
    </form>
  );
};

export default TodoForm;
