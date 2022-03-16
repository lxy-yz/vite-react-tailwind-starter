import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Index: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <header className="shadow">
        <nav className="p-4 md:p-6 lg:p-8 font-semibold text-sm max-w-screen-lg mx-auto">
          <ul className="w-full h-full flex space-x-8 justify-center items-center">
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
                to="/xxx"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                404
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Index;
