import { NumericCard } from "../lib/main";

function App() {
  return (
    <div className="bg-[#1F1F24] p-10 flex items-center gap-5 flex-wrap lg:flex-nowrap">
      <NumericCard
        totalBalance={435}
        term="eweter"
        chart={<div style={{ height: 100 }}></div>}
        profitability={545}
        textTotal="wetetler"
      />
      <NumericCard
        totalBalance={435}
        term="eweter"
        chart={<div style={{ height: 100 }}></div>}
        profitability={545}
        textTotal="wetetler"
      />
      <NumericCard
        totalBalance={435}
        term="eweter"
        chart={<div style={{ height: 100 }}></div>}
        profitability={545}
        textTotal="wetetler"
      />
    </div>
  );
}

export default App;
