import { SidebarMobile } from "../lib/main";

function App() {
  return (
    <div className="bg-bg-primary" style={{ maxWidth: 1131 }}>
      <SidebarMobile
        avatarUrl="/34"
        userName="Rewr"
        onOpenSidebar={() => confirm("erew")}
      />
    </div>
  );
}

export default App;
