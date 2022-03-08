import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <Link to="/blog">blog</Link> |<Link to="/todos">todos</Link> |
      <Link to="/xxx">404</Link>
    </div>
  );
};

export default Index;
