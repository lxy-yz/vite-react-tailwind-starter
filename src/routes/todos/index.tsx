import { useQuery } from "react-query";
import { getAllTodos } from "../../client";
import TodoItem from "../../components/todo-item";
import useRouter from "../../hooks/use-router";

const AllTodos = () => {
  const { Link } = useRouter();
  const { data: todos } = useGetTodos();

  return (
    <table className="w-full">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th scope="column" className="py-4">
            Title
          </th>
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
          <th scope="column" className="py-8">
            <Link
              to="new"
              className="text-slate-500
              inline-block
              bg-gradient-to-r from-blue-200 to-blue-200
              bg-no-repeat [background-position:0_88%]
              [background-size:100%_0.2em]
              motion-safe:transition-all motion-safe:duration-200
              hover:[background-size:100%_100%]
              focus:[background-size:100%_100%]
              "
            >
              New
            </Link>
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
