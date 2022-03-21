import useRouter from "../hooks/use-router";

const Todos = () => {
  const { Outlet } = useRouter();
  return (
    <div className="mx-auto max-w-md">
      <h1 className="py-16 text-center text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Todos
        </span>
      </h1>
      <Outlet />
    </div>
  );
};

export default Todos;
