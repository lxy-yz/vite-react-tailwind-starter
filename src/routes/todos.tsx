import useRouter from "../hooks/use-router";

const Todos = () => {
  const { Outlet } = useRouter();
  return (
    <div>
      <h1>Todos</h1>
      <Outlet />
    </div>
  );
};

export default Todos;
