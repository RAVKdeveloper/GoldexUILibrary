import { BalanceCard } from "../lib/main";
import { USDTIcon, RubleIcon } from "goldex-icon-library";

function App() {
  return (
    <div
      className="bg-bg-primary h-72 p-9 flex justify-between gap-4"
      style={{ maxWidth: 1131 }}
    >
      <BalanceCard
        balance={32423424}
        currency="RUB"
        height="lg"
        icon={<RubleIcon />}
      />
      <BalanceCard
        balance={32423424}
        currency="USDT TRC-20"
        height="lg"
        icon={<USDTIcon />}
      />
      <BalanceCard balance={32423424} currency="Профит" height="lg" />
    </div>
  );
}

export default App;
