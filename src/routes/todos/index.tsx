import React from "react";
import { useQuery } from "react-query";
import { getAllTodos } from "../../client";
import TodoItem from "../../components/todo-item";

const AllTodos: React.FC = () => {
  const { data: todos } = useGetTodos();

  return (
    <table>
      <thead>
        <tr>
          <td>Title </td>
          <td>Completed</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </tbody>
    </table>
  );
};

function useGetTodos() {
  return useQuery("todos", () => {
    return getAllTodos();
  });
}

export default AllTodos;
