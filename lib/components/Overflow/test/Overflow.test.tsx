import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Overflow } from "../ui/Overflow.ui";

describe("testing Overflow comppnent", () => {
  it("render transperant", () => {
    render(<Overflow />);

    const element = screen.getByTestId("overflow");

    expect(element).toBeInTheDocument();
  });

  it("render black", () => {
    render(<Overflow isTransperant />);

    const element = screen.getByTestId("overflow");

    expect(element).toBeInTheDocument();
  });
});
