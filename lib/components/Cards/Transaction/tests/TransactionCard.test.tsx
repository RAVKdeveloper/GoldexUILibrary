import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TransactionCard } from "../..";

describe("testing TransactionCard component", () => {
  const user = userEvent.setup();

  it("render deposit variant(ru)", () => {
    render(
      <TransactionCard
        variant="deposit"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="ru"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
  it("render exchange variant(ru)", () => {
    render(
      <TransactionCard
        variant="exchange"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="ru"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
  it("render inference variant(ru)", () => {
    render(
      <TransactionCard
        variant="inference"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="ru"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });

  // English language

  it("render deposit variant(en)", () => {
    render(
      <TransactionCard
        variant="deposit"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="en"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
  it("render exchange variant(en)", () => {
    render(
      <TransactionCard
        variant="exchange"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="en"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
  it("render inference variant(en)", () => {
    render(
      <TransactionCard
        variant="inference"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="en"
      />
    );

    const elementCard = screen.getByRole("article");
    const clickElement = screen.getByTestId("clickOption");

    user.click(clickElement);

    expect(elementCard).toBeInTheDocument();
    expect(clickElement).toBeInTheDocument();
  });
});
