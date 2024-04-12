import { Sidebar } from "../lib/main";

function App() {
  return (
    <div style={{ padding: 20, background: "#343741", maxWidth: 1431 }}>
      <Sidebar
        balanceRub={234}
        balanceUSDT={32432}
        user={{
          id: 1,
          name: "London",
          avatar: "test",
          url: "/test",
          role: "Operator",
        }}
        notifications={{
          Dashboard: 1,
          Balance: 1,
          Projects: 1,
          Invoices: 15,
          Transactions: 0,
          Account: 1,
        }}
        timeRemaining={"Time remaining: 60 m 00s"}
        links={{
          Dashboard: "/d",
          Balance: "/b",
          Projects: "/p",
          Invoices: "/i",
          Transactions: "/t",
          Account: "/a",
          DashboardSucces: "/ds",
          DashBoardUnSucces: "/du",
          DashBoardAppeal: "/da",
          DashboardProcessing: "/dp",
          BalanceInfo: "/bi",
          BalanceTransaction: "/bt",
          AccAll: "/al",
          AccGeneral: "/ag",
        }}
        activeLng="en"
        isOpenModal={false}
        changeLanguage={() => {}}
        cbLogOut={() => {}}
        cbSupport={() => {}}
        cbTheme={() => {}}
      />
    </div>
  );
}

export default App;
