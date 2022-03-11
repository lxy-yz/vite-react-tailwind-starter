import React from "react";
import { useMutation } from "react-query";
import { createTodo, queryClient } from "../../client";
import TodoForm from "../../components/todo-form";
import useRouter from "../../hooks/use-router";
import type { Todo } from "../../types";

const NewTodo: React.FC = () => {
  const { mutate } = useCreateTodo();
  const { navigate } = useRouter();

  return <TodoForm onCreate={mutate} onSubmit={() => navigate("..")} />;
};

function useCreateTodo() {
  return useMutation(
    (todo: Omit<Todo, "id">) => {
      return createTodo(todo);
    },
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );
}

export default NewTodo;
