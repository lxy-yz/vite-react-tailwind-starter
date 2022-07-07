import Nav from "../components/nav";

const NotFound = () => {
  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>
      <div className="mx-auto max-w-sm">
        <h1 className="mt-32 text-center">404 not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
