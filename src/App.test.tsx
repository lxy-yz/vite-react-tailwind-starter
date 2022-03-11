import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders `todos` to the screen", () => {
  render(<App />);
  const element = screen.getByText("todos");
  expect(element).toBeInTheDocument();
});
