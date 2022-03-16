import { useQuery } from "react-query";

import useRouter from "../../hooks/use-router";
import TodoItem from "../../components/todo-item";
import type { Todo } from "../../types";
import { getTodo } from "../../client";

const TodoPage = () => {
  const { params } = useRouter();
  const id = params["todoId"] as string;
  const { data: todo } = useGetTodo(id);

  return todo ? (
    <table>
      <tbody>
        <TodoItem todo={todo} />
      </tbody>
    </table>
  ) : null;
};

function useGetTodo(id: string) {
  return useQuery<Todo>(["todos", id], () => {
    return getTodo(id);
  });
}

export default TodoPage;
