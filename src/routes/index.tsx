import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <header className="shadow">
        <nav className="p-4 md:p-6 lg:p-8 font-semibold text-sm max-w-screen-lg mx-auto">
          <ul className="w-full h-full flex space-x-8 justify-center items-center">
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
