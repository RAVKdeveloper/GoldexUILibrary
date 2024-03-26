import { TransactionCard, ProjectCard } from "../lib/main";

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
      <ProjectCard
        name="Test Project wrwerewjtj0ietij0eti0eiherhithier"
        status="blocked"
        turnover={"3435,534,534 RUB"}
        minus={-33}
        plus={50}
        textStatus="Блокировка"
        textTurnover="Оборот за сутки"
      />
    </div>
  );
}

export default App;
