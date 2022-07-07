import ReactLogo from "~icons/logos/react";
import { useAuth } from "../hooks/use-auth";
import useRouter from "../hooks/use-router";

const Nav = () => {
  const { user, signout } = useAuth();
  const { NavLink: Link } = useRouter();

  const linkActiveClassName =
    "capitalize px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900";
  const linkClassName =
    "capitalize px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700";

  return (
    <nav className="bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <ul className="mt-5 md:mt-0 flex space-x-8 items-center">
          {user ? (
            <>
              <li>
                <Link
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? linkActiveClassName : linkClassName
                  }
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  to="/todos"
                  className={({ isActive }) =>
                    isActive ? linkActiveClassName : linkClassName
                  }
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
                  className={({ isActive }) =>
                    isActive ? linkActiveClassName : linkClassName
                  }
                >
                  sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? linkActiveClassName : linkClassName
                  }
                >
                  sign up
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/i18n"
              className={({ isActive }) =>
                isActive ? linkActiveClassName : linkClassName
              }
            >
              i18n
            </Link>
          </li>
          <li>
            <Link
              to="/xxx"
              className={({ isActive }) =>
                isActive ? linkActiveClassName : linkClassName
              }
            >
              404
            </Link>
          </li>
          <li>
            <Link
              to="/markdown"
              className={({ isActive }) =>
                isActive ? linkActiveClassName : linkClassName
              }
            >
              markdown
            </Link>
          </li>
        </ul>

        <div className="md:ml-auto flex items-center space-x-2">
          <ReactLogo className="text-2xl" />
          {user && (
            <a
              className={`capitalize hover:cursor-pointer ${linkClassName}`}
              onClick={() => {
                signout();
                location.replace("/");
              }}
            >
              sign out
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
