import { useAuth } from "../hooks/use-auth";
import useRouter from "../hooks/use-router";
import useDark from "../hooks/use-dark";

const Nav = () => {
  const { user, signout } = useAuth();
  const { NavLink: Link } = useRouter();
  const { isDark, toggleDark } = useDark()

  const linkActiveClassName =
    "dark:text-white w-full inline-block capitalize px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900";
  const linkClassName =
    "dark:text-gray-700 w-full inline-block capitalize px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:!text-white hover:bg-gray-700";
  const [menuHidden, hideMenu] = useState(false);
  const menu = (
    <ul className="flex flex-col md:flex-row md:space-x-4">
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
      <li className="md:ml-auto">
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
      </li>
    </ul>
  )

  return (
    <nav className="dark:bg-gray-50 bg-gray-800 px-4 sm:px-6 lg:px-8 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col divide-y divide-gray-700 md:divide-y-0 md:flex-row md:items-center md:h-16">
          <div className="flex">
            <Link to="/" className="mr-auto">
              <IconLogosReact className="text-4xl px-2 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" />
            </Link>
            <div className="md:hidden" onClick={() => hideMenu(!menuHidden)}>
              <IconBxMenu className="text-4xl px-2 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 hover:cursor-pointer" />
            </div>
          </div>
          {menuHidden && (
            <div className="block md:hidden">
              {menu}
            </div>
          )}
          <div className="hidden md:block">
            {menu}
          </div>
          <div className="ml-auto hover:cursor-pointer" onClick={() => toggleDark()}>
            {isDark ? <IconIcOutlineLightMode className="text-gray-700" /> : <IconIcOutlineDarkMode className="text-white" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
