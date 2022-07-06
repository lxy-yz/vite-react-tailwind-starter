import { useAuth } from "../hooks/use-auth";
import ReactLogo from "~icons/logos/react";

const Nav = () => {
  const { user } = useAuth();

  return (
    <nav className="flex items-center flex-col md:flex-row font-semibold text-sm px-6">
      <ul className="mt-5 md:mt-0 flex space-x-8 items-center">
        {user ? (
          <>
            <li>
              <Link
                to="/blog"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                to="/todos"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                todos
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/signin"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                sign in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                sign up
              </Link>
            </li>
          </>
        )}
        <li>
          <Link
            to="/i18n"
            className="hover:text-sky-500 dark:hover:text-sky-400"
          >
            i18n
          </Link>
        </li>
        <li>
          <Link
            to="/xxx"
            className="hover:text-sky-500 dark:hover:text-sky-400"
          >
            404
          </Link>
        </li>
        <li>
          <Link
            to="/markdown"
            className="hover:text-sky-500 dark:hover:text-sky-400"
          >
            markdown
          </Link>
        </li>
      </ul>

      <div className="md:ml-auto">
        <ReactLogo style={{ fontSize: "3em", margin: "1rem auto" }} />
      </div>
    </nav>
  );
};

export default Nav;
