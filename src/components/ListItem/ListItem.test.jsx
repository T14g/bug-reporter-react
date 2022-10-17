import "@testing-library/react";
import { render, screen } from "@testing-library/react";

import ListItem from "./index";

describe("List item", () => {
  it("should be in the document", () => {
    const view = render(<ListItem />);
    expect(view.baseElement).toBeInTheDocument();
  });

  it("list item should have a description", () => {
    render(<ListItem />);
    const listItemElement = screen.getByTestId("list-item");
    expect(listItemElement.textContent).toBe("123");
  });
});
