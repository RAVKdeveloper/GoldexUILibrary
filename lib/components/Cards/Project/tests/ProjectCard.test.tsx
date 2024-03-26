import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProjectCard } from "../..";

describe("testing ProjectCard component", () => {
  it("render", () => {
    render(
      <ProjectCard
        name="Test Project wrwerewjtj0ietij0eti0eiherhithier"
        status="blocked"
        turnover={"3435,534,534 RUB"}
        minus={-33}
        plus={50}
        textStatus="Блокировка"
        textTurnover="Оборот за сутки"
      />
    );

    const element = screen.getByRole("article");
    const clickElement = screen.getByTestId("options");

    userEvent.click(clickElement);

    expect(element).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
});
