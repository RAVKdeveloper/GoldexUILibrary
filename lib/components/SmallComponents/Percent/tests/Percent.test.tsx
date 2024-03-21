import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Percent } from "../..";

describe("testing Percent component", () => {
  it("render success", () => {
    render(<Percent value={100} />);

    const element = screen.getByTestId("percent");

    expect(element).toBeInTheDocument();
  });
  it("render critical", () => {
    render(<Percent value={-100} />);

    const element = screen.getByTestId("percent");

    expect(element).toBeInTheDocument();
  });
});
