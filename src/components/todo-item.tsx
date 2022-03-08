import React from "react";
import { useMutation } from "react-query";
import { deleteTodo, queryClient } from "../client";
import useRouter from "../hooks/useRouter";
import type { Todo } from "../types";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { Link } = useRouter();
  const { mutate: deleteTodo } = useDeleteTodo();

  return (
    <tr key={todo.id}>
      <td>{todo.title}</td>
      <td>{todo.completed ? "✅" : "❌"}</td>
      <td>
        <Link to={`${todo.id}/edit`}>Edit</Link>
        {" | "}
        <Link
          to={`${todo.id}`}
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(todo.id);
          }}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

const useDeleteTodo = () => {
  return useMutation(
    (id: string) => {
      return deleteTodo(id);
    },
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );
};

export default TodoItem;
