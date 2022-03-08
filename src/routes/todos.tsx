import React, { useState, useEffect } from "react";
import { createTodo, getAllTodos } from "../client";
import type { Todo } from "../types";

const Todos: React.FC = () => {
  const { mutate, data: newTodo } = useCreateTodo();
  const { data: todos } = useGetTodos(newTodo);
  return (
    <div>
      <code>{JSON.stringify(todos, null, 2)}</code>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          mutate({
            title: formData.get("title") as string,
            completed: false,
          });
        }}
      >
        <div>
          <label htmlFor="">Title</label>
          <input type="text" name="title" required />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

function useCreateTodo() {
  const [data, setData] = React.useState<Todo>();
  const mutate = (todo: Omit<Todo, "id">) => {
    createTodo(todo).then(setData);
  };
  return { mutate, data };
}

function useGetTodos(newTodo: unknown) {
  const [data, setData] = React.useState<Todo[]>([]);
  useEffect(() => {
    getAllTodos().then(setData);
  }, [newTodo]);
  return { data };
}

export default Todos;
