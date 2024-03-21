import { ProfileCard } from "../lib/main";

function App() {
  return (
    <div style={{ padding: 20, background: "#1F1F24" }}>
      <ProfileCard
        avatarRole="operator"
        avatarNickName="Reinalds"
        avatarUrl="https://ewrewrewre/ewrewr"
        cbOptions={() => confirm("callback")}
        isOpenModal={true}
      />
    </div>
  );
}

export default App;
