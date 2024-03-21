import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { NumericCard } from "../..";

describe("testing NumericCard", () => {
  it("render", () => {
    render(
      <NumericCard
        totalBalance={22444}
        term="Last month"
        chart={<div />}
        profitability={10}
        textTotal="Total"
      />
    );

    const element = screen.getByRole("article");

    expect(element).toBeInTheDocument();
  });
});
