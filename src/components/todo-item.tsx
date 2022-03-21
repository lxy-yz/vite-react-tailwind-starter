import { useMutation } from "react-query";
import { deleteTodo, queryClient } from "../client";
import useRouter from "../hooks/use-router";
import type { Todo } from "../types";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { Link } = useRouter();
  const { mutate: deleteTodo } = useDeleteTodo();

  return (
    <tr key={todo.id}>
      <th className="py-4">{todo.title}</th>
      <td className="text-center py-4">
        {todo.completed ? (
          <span className="rounded-full inline-block px-3 text-green-500 bg-green-200">
            done
          </span>
        ) : (
          <span className="rounded-full inline-block px-3 text-amber-500 bg-yellow-200">
            not finished
          </span>
        )}
      </td>
      <td colSpan={2} className="text-right">
        <Link className="text-blue-500" to={`/todos/${todo.id}/edit`}>
          Edit
        </Link>
        {" | "}
        <Link
          className="text-red-500"
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
