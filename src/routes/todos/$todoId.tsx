import React from "react";
import { useQuery } from "react-query";

import useRouter from "../../hooks/useRouter";
import TodoItem from "../../components/todo-item";
import type { Todo } from "../../types";
import { getTodo } from "../../client";

const TodoPage: React.FC = () => {
  const { params } = useRouter();
  const id = params["todoId"] as string;
  const { data: todo } = useGetTodo(id);

  return todo ? <TodoItem todo={todo} /> : null;
};

function useGetTodo(id: string) {
  return useQuery<Todo>(["todos", id], () => {
    return getTodo(id);
  });
}

export default TodoPage;
