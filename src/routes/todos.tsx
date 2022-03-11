import React from "react";
import useRouter from "../hooks/use-router";

const Todos: React.FC = () => {
  const { Outlet } = useRouter();
  return (
    <div>
      <h1>Todos</h1>
      <Outlet />
    </div>
  );
};

export default Todos;
