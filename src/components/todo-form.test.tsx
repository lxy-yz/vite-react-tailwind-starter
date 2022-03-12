import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoForm from "./todo-form";

describe("<TodoForm />", () => {
  it("should display required error when value is invalid", async () => {
    render(<TodoForm />);

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(screen.getByText(/Title is required/)).toBeInTheDocument();
  });

  it("should submit form when values are valid", async () => {
    const onSubmit = vi.fn();
    render(<TodoForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByLabelText("Title"), {
      target: {
        value: "test title",
      },
    });
    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("should call onUpdate when there is an existing todo model", async () => {
    const onCreate = vi.fn();
    const onUpdate = vi.fn();
    render(
      <TodoForm
        todo={{ id: "foo", title: "foo title", completed: false }}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
    );

    fireEvent.input(screen.getByLabelText("Title"), {
      target: {
        value: "test title",
      },
    });
    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(onUpdate).toHaveBeenCalled();
    expect(onCreate).not.toHaveBeenCalled();
  });
});
