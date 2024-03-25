import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { BalanceCard } from "../ui/BalanceCard.ui";
import { USDTIcon, RubleIcon } from "goldex-icon-library";

describe("testing BalanceCard component", () => {
  it("render ruble variant", () => {
    render(
      <BalanceCard icon={<RubleIcon />} currency="RUB" balance={2357534.54} />
    );

    const element = screen.getByText(/2,357,534.54/i);

    expect(element).toBeInTheDocument();
  });

  it("render usdt variant", () => {
    render(
      <BalanceCard icon={<USDTIcon />} currency="USDT" balance={2357534.54} />
    );

    const element = screen.getByText(/2,357,534.54/i);

    expect(element).toBeInTheDocument();
  });

  it("render usdt variant", () => {
    render(
      <BalanceCard icon={<USDTIcon />} currency="USDT" balance={1000000000.0} />
    );

    const element = screen.getByText(/1e/i);

    expect(element).toBeInTheDocument();
  });
});
