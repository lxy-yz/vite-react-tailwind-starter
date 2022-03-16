import { useQuery } from "react-query";
import { getAllTodos } from "../../client";
import TodoItem from "../../components/todo-item";
import useRouter from "../../hooks/use-router";

const AllTodos = () => {
  const { Link } = useRouter();
  const { data: todos } = useGetTodos();

  return (
    <table>
      <thead>
        <tr>
          <th scope="column">Title </th>
          <th scope="column">Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="column">
            <Link to="new">New</Link>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

function useGetTodos() {
  return useQuery("todos", () => {
    return getAllTodos();
  });
}

export default AllTodos;
