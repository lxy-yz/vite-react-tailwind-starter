import Nav from "../components/nav";
import useRouter from "../hooks/use-router";

const Blog = () => {
  const { Link, Outlet } = useRouter();

  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>

      <div className="mx-auto max-w-sm">
        <p>blog.tsx</p>
        <Link to="/blog/1b234bk12b3">id: 1b234bk12b3</Link> |
        <Link to="/blog/today">today</Link> |
        <Link to="/blog/today/xxx">not exists</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
