import { useState } from "react";
import { ProfileModal, ProfileCard, Sidebar } from "../lib/main";

function App() {
  const [test, setTest] = useState<boolean>(false);
  const [lng, setLng] = useState<string>("ru");

  return (
    <div style={{ padding: 320, background: "#1F1F24" }}>
      <ProfileCard
        avatarNickName="Roaed"
        avatarRole="Operator"
        avatarUrl="trkhrijrt"
        modal={
          <ProfileModal
            // cbPropLanguage={() => confirm("lang")}
            cbPropSupport={() => confirm("support")}
            cbPropTheme={() => confirm("theme")}
            cbPropLogout={() => confirm("logour")}
            isDarkMode={true}
            textLng="Language"
            textSupport="Support"
            textTheme="Theme"
            textLogOut="Log out"
            activeLng={lng}
            changeLng={setLng}
          />
        }
        isOpenModal={test}
        cbOptions={() => setTest(!test)}
      />
      <Sidebar
        balanceRub={23424}
        balanceUSDT={3342423}
        user={{
          id: 1,
          url: "/eret",
          avatar: "dsfsdf",
          role: "Operator",
          name: "Rayan",
        }}
        timeRemaining={"ewrwerjiwjte"}
        notifications={{
          Dashboard: 4,
          Balance: 0,
          Projects: 0,
          Invoices: 3,
          Account: 2,
          Transactions: 5,
        }}
        links={{
          Dashboard: "/d",
          Balance: "/b",
          Projects: "/p",
          Invoices: "/i",
          Account: "/a",
          Transactions: "/t",
          DashboardSucces: "/ds",
          DashBoardUnSucces: "/du",
          DashBoardAppeal: "/da",
          DashboardProcessing: "/dp",
          BalanceInfo: "/bi",
          BalanceTransaction: "/bt",
          AccAll: "/al",
          AccGeneral: "/ag",
        }}
        isOpenModal={test}
        changeLanguage={setLng}
        cbAvatar={() => setTest(!test)}
        activeLng={lng}
      />
    </div>
  );
}

export default App;
