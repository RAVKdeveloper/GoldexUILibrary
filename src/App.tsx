import { NumericCard, Percent } from "../lib/main";

function App() {
  return (
    <div style={{ padding: 20, background: "#1F1F24" }}>
      <Percent value={-10} />
      <NumericCard
        totalBalance={123424}
        term="vs last month"
        chart={<div />}
        profitability={100}
        textTotal="Total"
      />
    </div>
  );
}

export default App;
