import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LanguageModal } from "../..";

describe("testing LanguageModal component", () => {
  const user = userEvent.setup();

  it("render ru lng", () => {
    render(<LanguageModal activeLng="ru" changeLng={() => confirm("click")} />);

    const element = screen.getByRole("article");
    const clickEn = screen.getByText(/Английский/i);

    user.click(clickEn);

    expect(element).toBeInTheDocument();
  });

  it("render en lng", () => {
    render(<LanguageModal activeLng="en" changeLng={() => confirm("click")} />);

    const element = screen.getByRole("article");
    const clickRu = screen.getByText(/Russian/i);

    user.click(clickRu);

    expect(element).toBeInTheDocument();
  });
});
