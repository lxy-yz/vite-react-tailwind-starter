import React from "react";
import { useMutation, useQuery } from "react-query";
import { updateTodo, getTodo, queryClient } from "../../client";
import TodoForm from "../../components/todo-form";
import useRouter from "../../hooks/use-router";
import type { Todo } from "../../types";

const EditTodo: React.FC = () => {
  const { params, navigate } = useRouter();
  const id = params["todoId"] as string;
  const { data: todo } = useGetTodo(id);
  const { mutate: updateTodo } = useUpdateTodo();

  return (
    <TodoForm
      todo={todo}
      onUpdate={updateTodo}
      onSubmit={() => navigate("..")}
    />
  );
};

function useGetTodo(id: string) {
  return useQuery<Todo>(["todos", id], () => {
    return getTodo(id);
  });
}

function useUpdateTodo() {
  return useMutation(
    (todo: Omit<Todo, "id">) => {
      return updateTodo(todo);
    },
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );
}

export default EditTodo;
