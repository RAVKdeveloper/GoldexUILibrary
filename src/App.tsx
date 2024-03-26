import { TransactionCard } from "../lib/main";

function App() {
  return (
    <div className="bg-bg-primary h-72 p-9" style={{ width: "100%" }}>
      <TransactionCard
        variant="exchange"
        date="10 ноя 2023, 08:23"
        status="wait"
        sum={3245}
        language="ru"
      />
      <TransactionCard
        variant="deposit"
        date="10 ноя 2023, 08:23"
        status="expired"
        sum={3245}
        language="ru"
      />
      <TransactionCard
        variant="inference"
        date="10 ноя 2023, 08:23"
        status="paid"
        sum={3245}
        language="ru"
      />
    </div>
  );
}

export default App;
