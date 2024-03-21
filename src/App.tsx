import { useState } from "react";
import { ProfileModal, ProfileCard } from "../lib/main";

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
    </div>
  );
}

export default App;
