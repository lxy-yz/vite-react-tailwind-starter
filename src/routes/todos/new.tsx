import React from "react";
import { useMutation } from "react-query";
import { createTodo, queryClient } from "../../client";
import TodoForm from "../../components/todo-form";
import useRouter from "../../hooks/use-router";
import type { Todo } from "../../types";

const NewTodo: React.FC = () => {
  const { mutate } = useCreateTodo();

  return <TodoForm onCreate={mutate} />;
};

function useCreateTodo() {
  const { navigate } = useRouter();
  const res = useMutation(
    (todo: Omit<Todo, "id">) => {
      return createTodo(todo);
    },
    {
      onSuccess: (todo) => navigate(`../${todo.id}`),
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );
  return res;
}

export default NewTodo;
