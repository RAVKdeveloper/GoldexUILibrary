import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Alert } from "../ui/Alert.ui";

describe("testing Alert component", () => {
  it("render success", () => {
    render(
      <Alert variant="success" isOpen={true}>
        Success
      </Alert>
    );

    const el = screen.getByRole("article");

    expect(el).toBeInTheDocument();
  });

  it("render warning", () => {
    render(
      <Alert variant="warning" isOpen={true}>
        warning
      </Alert>
    );

    const el = screen.getByRole("article");

    expect(el).toBeInTheDocument();
  });

  it("render error", () => {
    render(
      <Alert variant="error" isOpen={true}>
        error
      </Alert>
    );

    const el = screen.getByRole("article");

    expect(el).toBeInTheDocument();
  });

  it("render info", () => {
    render(
      <Alert variant="info" isOpen={true}>
        info
      </Alert>
    );

    const el = screen.getByRole("article");

    expect(el).toBeInTheDocument();
  });
});
