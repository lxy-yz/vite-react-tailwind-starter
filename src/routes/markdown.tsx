import Nav from "../components/nav";
import MD from "../components/markdown.md";

const Markdown = () => {
  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>

      <div className="mx-auto max-w-sm">
        <MD />
      </div>
    </div>
  );
};

export default Markdown;
