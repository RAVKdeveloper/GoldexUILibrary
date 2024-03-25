import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Modal } from "../ui/Modal.ui";

describe("testing Modal component", () => {
  it("render", () => {
    render(<Modal>Modal</Modal>);

    const element = screen.getByText(/Modal/i);

    expect(element).toBeInTheDocument();
  });
});
