import { useMutation } from "react-query";
import { deleteTodo, queryClient } from "../client";
import useRouter from "../hooks/use-router";
import type { Todo } from "../types";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { Link } = useRouter();
  const { mutate: deleteTodo } = useDeleteTodo();

  return (
    <tr key={todo.id}>
      <td>{todo.title}</td>
      <td>{todo.completed ? "✅" : "❌"}</td>
      <td>
        <Link to={`/todos/${todo.id}/edit`}>Edit</Link>
        {" | "}
        <Link
          to={`/todos/${todo.id}`}
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
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );
};

export default TodoItem;
