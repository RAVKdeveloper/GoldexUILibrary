import { ProfileCard } from "../lib/main";

function App() {
  return (
    <div className="bg-[#1F1F24] p-10 flex items-center gap-5 flex-wrap lg:flex-nowrap">
      <ProfileCard
        avatarNickName="Reyli"
        avatarRole="OWNER"
        // avatarUrl="ewrewewt"
        cbOptions={() => {}}
      />
    </div>
  );
}

export default App;
